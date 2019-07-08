/* @flow */

import type { AppState } from '../../src/modules/main/types';
import { deepMerge } from '../../src/lib/deepMerge';
import { getInitialAppState } from '../../src/modules/main/getInitialAppState';

export type AppStatePartial = $Shape<AppState>;

export const appStateGen = (partial: AppStatePartial): AppState =>
  deepMerge(getInitialAppState(), partial);
