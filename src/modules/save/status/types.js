/* @flow */

import { SaveStatus } from './constants';
import type { AppState } from '../../main/types';

export type SaveStatusT = $Values<typeof SaveStatus>;

export type SaveStatusState = SaveStatusT;

export type SaveStatusDependencies = {|
  prevAppState: AppState,
  nextAppState: AppState,
|};
