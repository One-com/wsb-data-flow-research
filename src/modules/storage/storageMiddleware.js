/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { MOUNT_APP_ACTION } from '../main/actions';
import { wsbStorage } from './wsbStorage';
import { SAVE_ACTION } from '../save/actions';
import { setAppStateFromStorageAction } from './actions';

export const storageMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === MOUNT_APP_ACTION) {
    wsbStorage.get().then(data => {
      if (data) {
        store.dispatch(setAppStateFromStorageAction(data));
      }
    });
  }
  
  if (action.type === SAVE_ACTION) {
    const appState = store.getState();
    wsbStorage.put(appState).catch(e => {
      throw new Error(`Failed to put app state to storage: ${e}`);
    });
  }

  return next(action);
};
