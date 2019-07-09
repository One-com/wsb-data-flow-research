/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import type { ServiceAction } from './types';
import { SERVICE_HANDLER_ACTION } from './actions';
import { serviceRegistry } from './serviceRegistry';

export const serviceHandlerMiddleware = (store: AppStore) => (next: AppDispatch) => (action: ServiceAction) => {
  if (action.type !== SERVICE_HANDLER_ACTION) {
    return next(action);
  }

  const
    {
      service: serviceInfo,
      actions,
      params = [],
    } = action;

  const service = serviceRegistry.getService(serviceInfo.name);

  store.dispatch({
    type: actions.request,
    params,
  });

  service[serviceInfo.method](...params)
    .then(response => store.dispatch({
      type: actions.success,
      params,
      response,
    }))
    .catch(response => store.dispatch({
      type: actions.failure,
      params,
      response,
    }));
};
