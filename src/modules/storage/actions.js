/* @flow */

import type { StorageData } from './types';

export const
  SET_STORAGE_DATA_ACTION = 'SET_STORAGE_DATA_ACTION',
  setStorageDataAction = (data: StorageData | null) => ({
    type: SET_STORAGE_DATA_ACTION,
    payload: data,
  });

export const
  SAVE_ACTION = 'SAVE_ACTION',
  saveAction = () => ({
    type: SAVE_ACTION,
  });
