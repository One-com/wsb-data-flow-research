/* @flow */

import { storageServiceAction } from '../../serviceHandler/actions';
import { storageService } from '../../../services/storageService';
import { APP_STATE_SAVE_KEY } from './constants';
import type { AppState } from '../../main/types';

export const
  FETCH_APP_STATE_REQUEST_ACTION = 'FETCH_APP_STATE_REQUEST_ACTION',
  FETCH_APP_STATE_SUCCESS_ACTION = 'FETCH_APP_STATE_SUCCESS_ACTION',
  FETCH_APP_STATE_FAILURE_ACTION = 'FETCH_APP_STATE_FAILURE_ACTION',
  fetchAppStateAction = () => storageServiceAction({
    serviceMethod: storageService.get.name,
    actions: {
      request: FETCH_APP_STATE_REQUEST_ACTION,
      success: FETCH_APP_STATE_SUCCESS_ACTION,
      failure: FETCH_APP_STATE_FAILURE_ACTION,
    },
    params: [APP_STATE_SAVE_KEY],
  });

export const
  PUT_APP_STATE_REQUEST_ACTION = 'PUT_APP_STATE_REQUEST_ACTION',
  PUT_APP_STATE_SUCCESS_ACTION = 'PUT_APP_STATE_SUCCESS_ACTION',
  PUT_APP_STATE_FAILURE_ACTION = 'PUT_APP_STATE_FAILURE_ACTION',
  putAppStateAction = (state: AppState) => storageServiceAction({
    serviceMethod: storageService.set.name,
    actions: {
      request: PUT_APP_STATE_REQUEST_ACTION,
      success: PUT_APP_STATE_SUCCESS_ACTION,
      failure: PUT_APP_STATE_FAILURE_ACTION,
    },
    params: [APP_STATE_SAVE_KEY, state],
  });
