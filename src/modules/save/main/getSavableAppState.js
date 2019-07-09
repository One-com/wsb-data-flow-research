/* @flow */

import type { AppState } from '../../main/types';
import { workspaceMarginAppSel } from '../../workspace/margin/main/selectors';
import { workspaceComponentsAppSel } from '../../workspace/components/selectors';

const Selectors = [
  workspaceComponentsAppSel,
  workspaceMarginAppSel,
];

export const getSavableAppState = (appState: AppState) =>
  Selectors.reduce(
    (acc, sel) => Object.assign(acc, {[sel.toString()]: sel(appState)}),
    {},
  );
