/* @flow */

import type { ServiceHandlerActionParams } from './types';

export const
  serviceHandlerAction = (params: ServiceHandlerActionParams) => ({
    isService: true,
    ...params,
  });
