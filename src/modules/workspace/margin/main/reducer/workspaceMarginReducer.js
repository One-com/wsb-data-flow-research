/* @flow */

import {diReducer, initReducer, combineReducers} from '@sepo27/redux-di';
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

export const workspaceMarginReducer = combineReducers({
  width: workspaceMarginWidthReducer,
  isLocked: initReducer(
    WorkspaceMarginInitialState.isLocked,
    (state: boolean, action: Object) => (
      action.type === TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION
        ? !state
        : state
    ),
  ),
});
