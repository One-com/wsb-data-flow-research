/* @flow */

import type { InstanceServiceHandlerActionParams, ServiceHandlerActionParams } from './types';
import { ServiceHandlerRegistryName } from './serviceHandlerRegistry';

export const
  SERVICE_HANDLER_ACTION = 'SERVICE_HANDLER_ACTION',
  serviceHandlerAction = (params: ServiceHandlerActionParams) => ({
    type: SERVICE_HANDLER_ACTION,
    ...params,
  });

export const
  storageAction = ({serviceMethod, ...params}: InstanceServiceHandlerActionParams) =>
    serviceHandlerAction({
      service: {
        name: ServiceHandlerRegistryName.STORAGE,
        method: serviceMethod,
      },
      ...params,
    });
