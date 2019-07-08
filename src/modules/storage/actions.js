/* @flow */

import type { StorageData } from './types';

export const
  SET_APP_STATE_FROM_STORAGE_ACTION = 'SET_APP_STATE_FROM_STORAGE_ACTION',
  setAppStateFromStorageAction = (data: StorageData | null) => ({
    type: SET_APP_STATE_FROM_STORAGE_ACTION,
    payload: data,
  });
