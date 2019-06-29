/* @flow */

import {diReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginWidthState } from '../types';
import { MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION } from '../actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';

export const WorkspaceMarginWidthInitialState: WorkspaceMarginWidthState = 1000;

export const workspaceMarginWidthReducer = diReducer(
  WorkspaceMarginWidthInitialState,
  {
    wsWidth: '@workspace.width',
  },
  (width: WorkspaceMarginWidthState, action: Object, {wsWidth}) => {
    if (action.type === MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION) {
      const {payload: left} = action;
      return Math.max(
        Math.min(wsWidth - 2 * left, wsWidth),
        MIN_WORKSPACE_MARGIN_WIDTH,
      );
    }
    
    return width;
  },
);
