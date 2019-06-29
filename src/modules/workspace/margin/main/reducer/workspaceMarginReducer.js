/* @flow */

import {initReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginState } from '../types';
import { TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION } from '../actions';

export const WorkspaceMarginInitialState: WorkspaceMarginState = {
  width: 1000,
  isLocked: false,
};

export const workspaceMarginReducer = initReducer(
  WorkspaceMarginInitialState,
  (state: WorkspaceMarginState, action: Object) => (
    action.type === TOGGLE_WORKSPACE_MARGIN_LOCK_ACTION
      ? {...state, isLocked: !state.isLocked}
      : state
  ),
);
