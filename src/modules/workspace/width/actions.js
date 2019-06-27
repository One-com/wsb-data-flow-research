/* @flow */

export const
  SET_WORKSPACE_WIDTH_ACTION = 'SET_WORKSPACE_WIDTH_ACTION',
  setWorkspaceWidthAction = (width: number) => ({
    type: SET_WORKSPACE_WIDTH_ACTION,
    payload: width,
  });
