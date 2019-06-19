/* @flow */

import type { Store } from 'redux';
import type { WorkspaceState } from '../workspace/main/types';

export type AppState = {
  workspace: WorkspaceState,
};

export type AppStore = Store<AppState, *>;

export type AppSel<R: any = any> = (appState: AppState) => R;
