/* @flow */

import { diReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsState } from '../types';
import { ADD_COMPONENT_ACTION, NEW_COMPONENT_MEASURED_ACTION, TOUCH_COMPONENT_ACTION } from '../actions';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';
import type { WorkspaceModeT } from '../../mode/types';
import { MOVE_OVER_WORKSPACE_ACTION } from '../../main/actions';
import { WorkspaceMode } from '../../mode/WorkspaceMode';
import { updateComponentById } from '../../functions/updateComponentById';

export const ComponentsInitialState: ComponentsState = [];

export const componentsReducer: Reducer<ComponentsState, ComponentsAction> = diReducer(
  [],
  {
    mode: '.mode',
  },
  // TODO: action type
  (components: ComponentsState, action: Object, { mode }: { mode: WorkspaceModeT }) => {
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
    
    // if (action.type === TOUCH_COMPONENT_ACTION) {
    //   const { payload: comId } = action;
    //
    //   let found = false;
    //
    //   const nextComponents = components.reduce((acc, com) => {
    //     let nextCom;
    //
    //     if (com.id === comId) {
    //       found = true;
    //       nextCom = {...com, selected: true};
    //     } else {
    //       nextCom = {...com, selected: false};
    //     }
    //
    //     return acc.concat(nextCom);
    //   }, []);
    //
    //   if (!found) {
    //     throw new Error(`Component not found by id: ${comId}`);
    //   }
    //
    //   return nextComponents;
    // }

    // if (action.type === MOVE_OVER_WORKSPACE_ACTION && mode === WorkspaceMode.MOVING_COMPONENTS) {
    //   let moved = false;
    //
    //   const nextComponents = components.reduce((acc, com) => {
    //     if (com.selected) {
    //       moved = true;
    //       return acc.concat({
    //         ...com,
    //         position: action.payload,
    //       });
    //     }
    //
    //     return acc.concat(com);
    //   }, []);
    //
    //   if (moved) {
    //     return nextComponents;
    //   }
    // }

    return components;
  },
);
