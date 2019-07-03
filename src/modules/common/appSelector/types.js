/* @flow */

// TODO: these should be imported from redux-di

import type { StrPath } from '../commonTypes';

export type SelectorPath = Array<string | number>;

export type AppSel<S: Object = Object, R: any = any> = {
  (appState: S): R,
  _path: SelectorPath,
  toStrPath: () => StrPath,
};
