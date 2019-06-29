/* @flow */

export const
  MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION = 'MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION',
  moveLeftWorkspaceMarginHandleAction = (left: number) => ({
    type: MOVE_LEFT_WORKSPACE_MARGIN_HANDLE_ACTION,
    payload: left,
  });
