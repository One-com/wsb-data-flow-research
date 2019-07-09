/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { MOUNT_APP_ACTION } from '../main/actions';
import { wsbStorage } from './wsbStorage';
import { SAVE_ACTION } from '../save_deprecated/actions';
import { appStateSavedToStorageAction, setAppStateFromStorageAction } from './actions';
import { Lit } from '../common/Lit';
import { SaveStatus } from '../save_deprecated/constants';

export const storageMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === MOUNT_APP_ACTION) {
    wsbStorage.get().then(data => {
      if (data) {
        store.dispatch(setAppStateFromStorageAction(data));
      }
    });
  }

  if (action.type === SAVE_ACTION) {
    const appStateToSave = store.getState();
    appStateToSave[Lit.saveStatus] = SaveStatus.SAVED;

    wsbStorage.put(appStateToSave)
      .then(() => {
        store.dispatch(appStateSavedToStorageAction());
      })
      .catch(e => {
        throw new Error(`Failed to put app state to storage: ${e}`);
      });

    return;
  }

  return next(action);
};
