/* @flow */

import { initReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsState } from '../types';
import {
  ADD_COMPONENT_ACTION, MOVE_COMPONENT_ACTION,
  NEW_COMPONENT_MEASURED_ACTION,
  SELECT_COMPONENT_ACTION,
} from '../actions';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';
import { updateComponentById } from '../../functions/updateComponentById';

export const ComponentsInitialState: ComponentsState = [];

export const componentsReducer: Reducer<ComponentsState, ComponentsAction> = initReducer(
  [],
  // TODO: action type
  (components: ComponentsState, action: Object) => {
    if (action.type === ADD_COMPONENT_ACTION) {
      const
        newComInitialState = comRegistry.getInitialState(action.payload),
        newComPositionShift = components.length
          ? components.length * NEW_COMPONENT_POSITION_SHIFT_DISTANCE
          : components.length,
        newComPosition = newComPositionShift
          ? {
            top: newComInitialState.position.top + newComPositionShift,
            left: newComInitialState.position.left + newComPositionShift,
          }
          : newComInitialState.position;

      return [
        ...components,
        {
          ...newComInitialState,
          position: newComPosition,
        },
      ];
    }

    if (action.type === NEW_COMPONENT_MEASURED_ACTION) {
      const
        {payload: {id, dimensions}} = action;

      return updateComponentById({
        components,
        id,
        partial: {
          dimensions,
          isGhost: undefined,
        },
      });
    }

    if (action.type === SELECT_COMPONENT_ACTION) {
      const { payload: comId } = action;

      let found = false;

      const nextComponents = components.reduce((acc, com) => {
        let nextCom;

        if (com.id === comId) {
          found = true;
          nextCom = {...com, isSelected: true};
        } else {
          nextCom = {...com, isSelected: false};
        }

        return acc.concat(nextCom);
      }, []);

      if (!found) {
        throw new Error(`Component not found by id: ${comId}`);
      }

      return nextComponents;
    }

    if (action.type === MOVE_COMPONENT_ACTION) {
      const {payload: {id: comId, position}} = action;

      let updated = false;

      const nextComponents = components.reduce((acc, com) => {
        let nextCom;

        if (com.id === comId) {
          updated = updated || true;
          nextCom = {...com, position};
        } else {
          nextCom = com;
        }

        return acc.concat(nextCom);
      }, []);

      if (!updated) {
        throw new Error(`Component not found by id: ${comId}`);
      }

      return nextComponents;
    }

    return components;
  },
);
