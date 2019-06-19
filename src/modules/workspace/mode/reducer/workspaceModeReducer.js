/* @flow */

import {initReducer} from '@sepo27/redux-di';
import type { WorkspaceModeT } from '../types';
import { WorkspaceMode } from '../WorkspaceMode';
import { RELEASE_WORKSPACE_ACTION, TOUCH_WORKSPACE_ACTION } from '../../main/actions';

export const WorkspaceModeReducerInitialState: WorkspaceModeT = WorkspaceMode.IDLE;

export const workspaceModeReducer = initReducer(
  WorkspaceModeReducerInitialState,
  (state: WorkspaceModeT, action: Object) => {
    if (action.type === TOUCH_WORKSPACE_ACTION) {
      return WorkspaceMode.MOVING_COMPONENTS;
    }

    if (action.type === RELEASE_WORKSPACE_ACTION) {
      return WorkspaceMode.IDLE;
    }

    return state;
  },
);
