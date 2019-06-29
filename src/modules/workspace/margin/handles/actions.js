/* @flow */

export const
  MOVE_LEFT_WSM_HANDLE_ACTION = 'MOVE_LEFT_WSM_HANDLE_ACTION',
  moveLeftWsmHandleAction = (left: number) => ({
    type: MOVE_LEFT_WSM_HANDLE_ACTION,
    payload: left,
  });
