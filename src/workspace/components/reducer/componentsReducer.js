/* @flow */

import { initReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsState } from '../types';
import { ADD_COMPONENT_ACTION } from '../actions';
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

    return components;
  },
);
