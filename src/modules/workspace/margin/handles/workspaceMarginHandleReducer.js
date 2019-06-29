/* @flow */

import type { WorkspaceMarginDependencies, WorkspaceMarginState } from '../main/types';
import { MOVE_LEFT_WSM_HANDLE_ACTION } from './actions';
import { updateWorkspaceMarginWidth } from './updateWorkspaceMarginWidth';

export const workspaceMarginHandleReducer = (
  state: WorkspaceMarginState,
  action: Object,
  {wsWidth}: WorkspaceMarginDependencies,
) => {
  const {width} = state;
  
  let nextWidth;
  
  if (action.type === MOVE_LEFT_WSM_HANDLE_ACTION) {
    const
      {payload: left} = action,
      delta = left * -1;
    
    nextWidth = updateWorkspaceMarginWidth({
      width,
      delta,
      wsWidth,
    });
  }
  
  if (nextWidth !== undefined) {
    return {...state, width: nextWidth};
  }
  
  return state;
};
