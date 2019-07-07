/* @flow */

import type { StorageData } from './types';

export const
  STORAGE_DATA_RECEIVED_ACTION = 'STORAGE_DATA_RECEIVED_ACTION',
  storageDataReceivedAction = (data: StorageData | null) => ({
    type: STORAGE_DATA_RECEIVED_ACTION,
    payload: data,
  });

export const
  SAVE_ACTION = 'SAVE_ACTION',
  saveAction = () => ({
    type: SAVE_ACTION,
  });
