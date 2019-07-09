/* @flow */

import {initReducer} from '@sepo27/redux-di';
import type { WorkspaceStatusState } from './types';
import { WorkspaceStatus } from './constants';
import { FETCH_APP_STATE_SUCCESS_ACTION } from '../../save/main/actions';

export const WorkspaceStatusInitialState: WorkspaceStatusState = WorkspaceStatus.INITIALIZING;

export const workspaceStatusReducer = initReducer(
  WorkspaceStatusInitialState,
  (state: WorkspaceStatusState, action: Object) => (
    action.type === FETCH_APP_STATE_SUCCESS_ACTION
      ? WorkspaceStatus.READY
      : state
  ),
);
