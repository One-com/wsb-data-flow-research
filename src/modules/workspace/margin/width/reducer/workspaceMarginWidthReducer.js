/* @flow */

import {diReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginWidthState } from '../types';
import { updateWorkspaceMarginWidth } from '../functions/updateWorkspaceMarginWidth';
import { MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION } from '../actions';

export const WorkspaceMarginWidthInitialState: WorkspaceMarginWidthState = 1000;

export const workspaceMarginWidthReducer = diReducer(
  WorkspaceMarginWidthInitialState,
  {
    wsWidth: '@workspace.width',
  },
  (width: WorkspaceMarginWidthState, action: Object, {wsWidth}) => {
    if (action.type === MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION) {
      const
        {payload: left} = action,
        delta = left * -1;

      return updateWorkspaceMarginWidth({
        width,
        delta,
        wsWidth,
      });
    }
    
    return width;
  },
);
