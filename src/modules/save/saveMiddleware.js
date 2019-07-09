/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import { MOUNT_APP_ACTION } from '../main/actions';
import { fetchAppStateAction, putAppStateAction } from './actions';
import { SAVE_ACTION } from '../save_deprecated/actions';
import { Lit } from '../common/Lit';
import { SaveStatus } from '../save_deprecated/constants';

export const saveMiddleware = (store: AppStore) => (next: AppDispatch) => (action: Object) => {
  if (action.type === MOUNT_APP_ACTION) {
    store.dispatch(fetchAppStateAction());
  }

  if (action.type === SAVE_ACTION) {
    const appStateToSave = store.getState();
    appStateToSave[Lit.saveStatus] = SaveStatus.SAVED;

    store.dispatch(putAppStateAction(appStateToSave));
  }

  return next(action);
};
