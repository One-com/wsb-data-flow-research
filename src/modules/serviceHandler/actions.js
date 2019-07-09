/* @flow */

import type { ServiceHandlerActionParams } from './types';

export const
  SERVICE_HANDLER_ACTION = 'SERVICE_HANDLER_ACTION',
  serviceHandlerAction = (params: ServiceHandlerActionParams) => ({
    type: SERVICE_HANDLER_ACTION,
    ...params,
  });
