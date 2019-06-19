/* @flow */

import { initReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsState } from '../types';
import { ADD_COMPONENT_ACTION, SELECT_COMPONENT_ACTION } from '../actions';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';

export const ComponentsInitialState: ComponentsState = [];

export const componentsReducer: Reducer<ComponentsState, ComponentsAction> = initReducer(
  [],
  (components: ComponentsState, action: Object) => { // TODO: action type
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

    if (action.type === SELECT_COMPONENT_ACTION) {
      const { payload: comId } = action;

      let found = false;

      const nextComponents = components.reduce((acc, com) => {
        let nextCom;

        if (com.id === comId) {
          found = true;
          nextCom = {...com, selected: true};
        } else {
          nextCom = {...com, selected: false};
        }

        return acc.concat(nextCom);
      }, []);

      if (!found) {
        throw new Error(`Component not found by id: ${comId}`);
      }

      return nextComponents;
    }

    return components;
  },
);
