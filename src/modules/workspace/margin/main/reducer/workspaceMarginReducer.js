/* @flow */

import {diReducer, initReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginState } from '../types';
import { TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION } from '../actions';
import { workspaceMarginHandleReducer } from '../../handles/workspaceMarginHandleReducer';

export const WorkspaceMarginInitialState: WorkspaceMarginState = {
  width: 1000,
  isLocked: false,
};

export const workspaceMarginReducer = diReducer(
  WorkspaceMarginInitialState,
  {
    wsWidth: '.width',
  },
  (state: WorkspaceMarginState, action: Object, {wsWidth}) => {
    if (action.type === TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION) {
      return {...state, isLocked: !state.isLocked};
    }

    let nextState = state;

    nextState = workspaceMarginHandleReducer(nextState, action, {wsWidth});

    return nextState;
  },
);
