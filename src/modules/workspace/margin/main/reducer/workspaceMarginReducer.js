/* @flow */

import {diReducer, initReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginState } from '../types';
import { TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION } from '../actions';
import {
  WorkspaceMarginWidthInitialState,
  workspaceMarginWidthReducer,
} from '../../width/reducer/workspaceMarginWidthReducer';

export const WorkspaceMarginInitialState: WorkspaceMarginState = {
  width: WorkspaceMarginWidthInitialState,
  isLocked: false,
};

const isLockedReducer = initReducer(
  WorkspaceMarginInitialState.isLocked,
  (state: boolean, action: Object) => {

    if (action.type === TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION) {
      return !state
    }

    return state;
  },
);

export const workspaceMarginReducer = diReducer(
  WorkspaceMarginInitialState,
  {
    wsWidth: '.width',
  },
  (state: WorkspaceMarginState, action: Object, {wsWidth}) => ({
    isLocked: isLockedReducer(state.isLocked, action),
    width: workspaceMarginWidthReducer(state.width, action, {wsWidth}),
  }),
);
