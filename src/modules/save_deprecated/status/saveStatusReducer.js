/* @flow */

import { initReducer } from '@sepo27/redux-di';
import { SaveStatus } from '../constants';
import type { SaveStatusState } from './types';

export const SaveStatusInitialState = SaveStatus.SAVED;

export const saveStatusReducer = initReducer(SaveStatusInitialState, (state: SaveStatusState, action: Object) => {
  // if (action.type === APP_STATE_SAVED_TO_STORAGE_ACTION) {
  //   return SaveStatus.SAVED;
  // }

  return state;
});
