/* @flow */

import type { Store, Dispatch } from 'redux';
import type { WorkspaceState } from '../workspace/main/types';
import type { StrPath } from '../common/commonTypes';

export type AppState = {
  workspace: WorkspaceState,
};

export type AppDispatch = Dispatch<*>;

export type AppStore = Store<AppState, *>;

export type SelectorPath = Array<string | number>;

export type AppSel<R: any = any> = {
  (appState: AppState): R,
  _path: SelectorPath,
  toStrPath: () => StrPath,
  spawn: <R>(path: SelectorPath) => AppSel<R>;
};
