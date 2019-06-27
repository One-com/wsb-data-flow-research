/* @flow */

import {initReducer} from '@sepo27/redux-di';
import type { WorkspaceMarginState } from '../types';

export const WorkspaceMarginInitialState: WorkspaceMarginState = {
  width: 1000,
};

export const workspaceMarginReducer = initReducer(WorkspaceMarginInitialState, s => s);
