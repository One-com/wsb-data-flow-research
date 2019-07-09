/* @flow */

import type { AppState } from '../../src/modules/main/types';
import { deepMerge } from '../../src/lib/deepMerge';

export type AppStatePartial = $Shape<AppState>;

export const appStateGen = (partial: AppStatePartial): AppState =>
  deepMerge({}, partial);
