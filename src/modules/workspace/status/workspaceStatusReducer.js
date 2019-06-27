/* @flow */

import {initReducer} from '@sepo27/redux-di';
import type { WorkspaceStatusState } from './types';
import { WorkspaceStatus } from './constants';
import { SET_WORKSPACE_WIDTH_ACTION } from '../width/actions';

export const WorkspaceStatusInitialState: WorkspaceStatusState = WorkspaceStatus.INITIALIZING;

export const workspaceStatusReducer = initReducer(
  WorkspaceStatusInitialState,
  (state: WorkspaceStatusState, action: Object) => (
    action.type === SET_WORKSPACE_WIDTH_ACTION
      ? WorkspaceStatus.READY
      : state
  ),
);
