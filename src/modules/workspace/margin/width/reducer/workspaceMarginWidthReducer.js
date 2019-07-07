/* @flow */

import {diReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginWidthState } from '../types';
import {
  MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION,
  MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION,
} from '../actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';
import { STORAGE_DATA_RECEIVED_ACTION } from '../../../../storage/actions';

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

    if (action.type === MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION) {
      const {payload: x} = action;
      return Math.max(
        Math.min(2 * x - wsWidth, wsWidth),
        MIN_WORKSPACE_MARGIN_WIDTH,
      );
    }

    if (action.type === STORAGE_DATA_RECEIVED_ACTION) {
      return action.payload.workspace.margin.width;
    }

    return width;
  },
);
