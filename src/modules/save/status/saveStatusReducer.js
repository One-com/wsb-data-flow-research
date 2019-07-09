/* @flow */

import {equals as rEquals} from 'ramda';
import type { SaveStatusDependencies, SaveStatusState } from './types';
import { SaveStatus } from './constants';
import { getSavableAppState } from '../main/getSavableAppState';

export const SaveStatusInitialState: SaveStatusState = SaveStatus.SAVED;

export const saveStatusReducer = (
  state: SaveStatusState | typeof undefined,
  action: Object,
  deps: SaveStatusDependencies,
) => {
  if (state === undefined) return SaveStatusInitialState;

  const { prevAppState, nextAppState } = deps;

  if (
    Object.keys(prevAppState).length
    && !rEquals(getSavableAppState(prevAppState), getSavableAppState(nextAppState))
  ) {
    return SaveStatus.UNSAVED;
  }

  return state;
};
