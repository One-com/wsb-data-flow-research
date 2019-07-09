/* @flow */

import { storageAction } from '../serviceHandler/actions';
import { storageService } from '../../services/storageService';
import { APP_STATE_SAVE_KEY } from './constants';

export const
  FETCH_APP_STATE_REQUEST_ACTION = 'FETCH_APP_STATE_REQUEST_ACTION',
  FETCH_APP_STATE_SUCCESS_ACTION = 'FETCH_APP_STATE_SUCCESS_ACTION',
  FETCH_APP_STATE_FAILURE_ACTION = 'FETCH_APP_STATE_FAILURE_ACTION',
  fetchAppStateAction = () => storageAction({
    serviceMethod: storageService.get.name,
    actions: {
      request: FETCH_APP_STATE_REQUEST_ACTION,
      success: FETCH_APP_STATE_SUCCESS_ACTION,
      failure: FETCH_APP_STATE_FAILURE_ACTION,
    },
    params: [APP_STATE_SAVE_KEY],
  });
