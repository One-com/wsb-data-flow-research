/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { APP_MOUNT_ACTION } from '../main/actions';
import { wsbStorage } from '../../services/wsbStorage';
import { storageDataReceivedAction } from './actions';

export const storageMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === APP_MOUNT_ACTION) {
    wsbStorage.getData().then(data => {
      store.dispatch(storageDataReceivedAction(data));
    });
  }

  return next(action);
};
