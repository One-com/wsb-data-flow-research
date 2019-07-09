/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { MOUNT_APP_ACTION } from '../main/actions';
import { fetchAppStateAction } from './actions';

export const saveMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === MOUNT_APP_ACTION) {
    store.dispatch(fetchAppStateAction());
  }

  return next(action);
};
