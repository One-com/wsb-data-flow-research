/* @flow */

import type { StorageData } from './types';

export const
  SET_APP_STATE_FROM_STORAGE_ACTION = 'SET_APP_STATE_FROM_STORAGE_ACTION',
  setAppStateFromStorageAction = (data: StorageData | null) => ({
    type: SET_APP_STATE_FROM_STORAGE_ACTION,
    payload: data,
  });

export const
  APP_STATE_SAVED_TO_STORAGE_ACTION = 'APP_STATE_SAVED_TO_STORAGE_ACTION',
  appStateSavedToStorageAction = () => ({
    type: APP_STATE_SAVED_TO_STORAGE_ACTION,
  });
