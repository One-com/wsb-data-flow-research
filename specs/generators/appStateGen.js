/* @flow */

import type { AppState } from '../../src/modules/main/types';
import { deepMerge } from '../../src/lib/deepMerge';
import { appReducer } from '../../src/modules/main/appReducer';

export const appStateGen = (partial: $Shape<AppState>): AppState =>
  deepMerge(partial, appReducer(undefined, {type: '@@INIT'}));
