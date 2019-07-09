/* @flow */

import type { InstanceServiceActionParams, ServiceActionParams } from './types';
import { ServiceRegistryName } from './ServiceRegistryIndex';

export const
  SERVICE_HANDLER_ACTION = 'SERVICE_HANDLER_ACTION',
  serviceAction = (params: ServiceActionParams) => ({
    type: SERVICE_HANDLER_ACTION,
    ...params,
  });

export const
  storageServiceAction = ({serviceMethod, ...params}: InstanceServiceActionParams) =>
    serviceAction({
      service: {
        name: ServiceRegistryName.STORAGE,
        method: serviceMethod,
      },
      ...params,
    });
