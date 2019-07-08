/* @flow */

import type { AppState } from '../../src/modules/main/types';
import { deepMerge } from '../../src/lib/deepMerge';
import { appReducer } from '../../src/modules/main/appReducer';

export type AppStatePartial = $Shape<AppState>;

export const appStateGen = (partial: AppStatePartial): AppState =>
  deepMerge(appReducer(undefined, {type: '@@INIT'}), partial);
