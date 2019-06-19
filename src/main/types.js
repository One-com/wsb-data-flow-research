/* @flow */

import type { WorkspaceState } from '../workspace/types';

export type AppState = {
  workspace: WorkspaceState,
};

export type AppSel<R: any = any> = (appState: AppState) => R;
