/* @flow */

import type { InstanceServiceActionParams, ServiceActionArgs, ServiceActionParams } from './types';
import { ServiceRegistryName } from './ServiceRegistryIndex';

export const
  SERVICE_HANDLER_ACTION = 'SERVICE_HANDLER_ACTION',
  serviceAction = (params: ServiceActionParams) => ({
    type: SERVICE_HANDLER_ACTION,
    ...params,
  });

export const
  serviceRequestAction = (type: string, params: ServiceActionArgs) => ({
    type,
    params,
  });

export const
  serviceResultAction = (
    input: {
      type: string,
      response: Object | string | number | boolean,
      params?: ServiceActionArgs,
    }
  ) => input;

export const
  storageServiceAction = ({serviceMethod, ...params}: InstanceServiceActionParams) =>
    serviceAction({
      service: {
        name: ServiceRegistryName.STORAGE,
        method: serviceMethod,
      },
      ...params,
    });
