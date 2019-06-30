/* @flow */

import { diReducer } from '@sepo27/redux-di';
import type { Reducer } from 'redux';
import type { ComponentsAction, ComponentsDependencies, ComponentsState } from '../types';
import {
  ADD_COMPONENT_ACTION, DESELECT_COMPONENT_ACTION, MOVE_COMPONENT_ACTION,
  NEW_COMPONENT_MEASURED_ACTION,
  SELECT_COMPONENT_ACTION,
} from '../actions';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';
import { updateComponentById } from '../functions/updateComponentById';
import { calculateWorkspaceMarginValue } from '../../margin/width/functions/calculateWorkspaceMarginValue';

export const ComponentsInitialState: ComponentsState = [];

export const componentsReducer: Reducer<ComponentsState, ComponentsAction> = diReducer(
  [],
  {
    wsWidth: '.width',
    margin: '.margin',
  },
  // TODO: action type
  // (components: ComponentsState, action: Object, {wsWidth, margin}: ComponentsDependencies) => {
  (components: ComponentsState, action: Object, deps: ComponentsDependencies) => {
    // TODO: wtf ?
    const {wsWidth, margin} = deps;

    if (action.type === ADD_COMPONENT_ACTION) {
      const
        newComInitialState = comRegistry.getInitialState(action.payload),
        newComPositionShift = components.length
          ? components.length * NEW_COMPONENT_POSITION_SHIFT_DISTANCE
          : 0,
        newComPositionLeftShift = newComPositionShift + (wsWidth - margin.width) / 2,
        newComPosition = {
          top: newComInitialState.position.top + newComPositionShift,
          left: newComInitialState.position.left + newComPositionLeftShift,
        };

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
        id,
        // $FlowFixMe
        partial: {
          dimensions,
          isGhost: undefined,
        },
        components,
      });
    }

    if (action.type === SELECT_COMPONENT_ACTION) {
      return updateComponentById({
        id: action.payload,
        partial: {isSelected: true},
        otherComPartial: {isSelected: false},
        components,
      });
    }

    if (action.type === MOVE_COMPONENT_ACTION) {
      const
        {payload: {id: comId, position: inPosition}} = action,
        margin = calculateWorkspaceMarginValue(deps.margin.width, wsWidth);

      return updateComponentById({
        id: comId,
        partial: com => {
          const
            maxLeft = margin + deps.margin.width - com.dimensions.width,
            left = deps.margin.isLocked
              ? Math.min(
                Math.max(inPosition.left, margin),
                maxLeft,
              )
              : Math.max(
                Math.min(
                  inPosition.left,
                  wsWidth - com.dimensions.width,
                ),
                0,
              ),
            position = {
              top: inPosition.top,
              left,
            };

          return {
            ...com,
            position,
          };
        },
        components
      });
    }

    if (action.type === DESELECT_COMPONENT_ACTION) {
      return updateComponentById({
        id: action.payload,
        partial: {isSelected: false},
        components,
      });
    }

    return components;
  },
);
