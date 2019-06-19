/* @flow */

import { initReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsState } from '../types';
import { ADD_COMPONENT_ACTION } from '../actions';
import { comRegistry } from '../../../components/ComponentsRegistry';

export const ComponentsInitialState: ComponentsState = [];

export const componentsReducer: Reducer<ComponentsState, ComponentsAction> = initReducer(
  [],
  (state: ComponentsState, action: Object) => { // TODO: action type
    if (action.type === ADD_COMPONENT_ACTION) {
      return [...state, comRegistry.getInitialState(action.payload)];
    }

    return state;
  },
);
