/* @flow */

import {initReducer} from '@sepo27/redux-di';

import type { WorkspaceWidthState } from './types';
import { SET_WORKSPACE_WIDTH_ACTION } from './actions';

export const WorkspaceWidthInitialState: WorkspaceWidthState = 0;

export const workspaceWidthReducer = initReducer(
  WorkspaceWidthInitialState,
  (state: WorkspaceWidthState, action: Object) => (
    action.type === SET_WORKSPACE_WIDTH_ACTION
      ? action.payload
      : state
  ),
);
