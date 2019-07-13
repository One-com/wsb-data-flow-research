/* @flow */

import type { FnReturn } from '../../../common/commonTypes';

export const
  MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION = 'MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION',
  moveLeftWorkspaceMarginHandleAction = (left: number) => ({
    type: MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION,
    payload: left,
  });

export const
  MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION = 'MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION',
  moveRightWorkspaceMarginHandleAction = (x: number) => ({
    type: MOVE_RIGHT_WORKSPACE_MARGIN_HANDLE_ACTION,
    payload: x,
  });

export type WorkspaceMarginAction =
  FnReturn<typeof moveLeftWorkspaceMarginHandleAction>
  | FnReturn<typeof moveRightWorkspaceMarginHandleAction>;
