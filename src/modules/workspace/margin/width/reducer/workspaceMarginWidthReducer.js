/* @flow */

import { diReducer, DiSelector } from '@sepo27/redux-di';
import type { WorkspaceMarginWidthState } from '../types';
import {
  MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION,
  MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION,
} from '../actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';
import type { WorkspaceMarginAction } from '../actions';
import { MOVE_COMPONENT_ACTION } from '../../../components/actions';

export const WorkspaceMarginWidthInitialState: WorkspaceMarginWidthState = 1000;

/**
 * TODO: export types from redux-di.
 *
 * Should be like this:
 *
 * export diReducer<WorkspaceMarginWidthState, WorkspaceMarginAction, WorkspaceMarginDependencies>
 */

export const workspaceMarginWidthReducer = diReducer(
  WorkspaceMarginWidthInitialState,
  {
    wsWidth: '@workspace.width',
    isLocked: '.isLocked',
    components: new DiSelector('@workspace.components', {
      predicate: ({ action }) => (
        action.type === MOVE_COMPONENT_ACTION
      ),
    }),
  },
  (width: WorkspaceMarginWidthState, action: WorkspaceMarginAction, deps) => {
    const {wsWidth, isLocked: isMarginLocked, components} = deps;

    if (action.type === MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION) {
      const {payload: left} = action;
      return Math.max(
        Math.min(wsWidth - 2 * left, wsWidth),
        MIN_WORKSPACE_MARGIN_WIDTH,
      );
    }

    if (action.type === MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION) {
      const {payload: x} = action;
      return Math.max(
        Math.min(2 * x - wsWidth, wsWidth),
        MIN_WORKSPACE_MARGIN_WIDTH,
      );
    }

    if (action.type === MOVE_COMPONENT_ACTION) {
      if (!isMarginLocked) {
        const
          // wsWidth = wsWidth,
          // components = nextState.components,
          movingComponent = components.find(com => com.id === action.payload.id),
          minComponentsMargin = components.reduce(
            (acc, com) => {
              const
                {position: {left: comLeft}, dimensions: {width}} = com,
                comRight = comLeft + width;

              return Math.min(comLeft, wsWidth - comRight);
            },
            wsWidth,
          ),
          minMargin = Math.min(
            minComponentsMargin,
            movingComponent.position.left,
            wsWidth - movingComponent.position.left - movingComponent.dimensions.width,
          ),
          nextMarginWidth = Math.min(
            wsWidth - 2 * minMargin,
            wsWidth,
          );
        
        return nextMarginWidth;
      }
    }

    return width;
  },
);
