/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { MOUNT_APP_ACTION } from '../main/actions';
import { wsbStorage } from './wsbStorage';
import { setStorageDataAction } from './actions';

export const storageMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === MOUNT_APP_ACTION) {
    wsbStorage.getData().then(data => {
      store.dispatch(setStorageDataAction(data));
    });
  }

  return next(action);
};
