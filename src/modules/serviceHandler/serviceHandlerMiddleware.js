/* @flow */

import type { AppDispatch, AppStore } from '../main/types';
import type { ServiceHandlerAction } from './types';
import { SERVICE_HANDLER_ACTION } from './actions';
import { serviceHandlerRegistry } from './serviceHandlerRegistry';

export const serviceHandlerMiddleware = (store: AppStore) => (next: AppDispatch) => (action: ServiceHandlerAction) => {
  if (action.type !== SERVICE_HANDLER_ACTION) {
    return next(action);
  }

  const
    {
      service: serviceInfo,
      actions,
      params = [],
    } = action;

  const service = serviceHandlerRegistry.getService(serviceInfo.name);

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
