/* @flow */

import { ServiceRegistryName } from './ServiceRegistryIndex';
import type { FnReturn } from '../common/commonTypes';
import { serviceAction } from './actions';

export type ServiceRegistryNameT = $Values<typeof ServiceRegistryName>;

export type ServiceRegistryIndexT = {
  [k: ServiceRegistryNameT]: Object,
};

export type ServiceActionService = {|
  name: ServiceRegistryNameT,
  method: string,
|};

export type ServiceActionParams = {|
  service: ServiceActionService,
  actions: {|
    request: string,
    success: string,
    failure: string,
  |},
  params?: Array<any>,
|};

export type InstanceServiceActionParams = {|
  ...$Diff<ServiceActionParams, { service: ServiceActionService }>,
  serviceMethod: string,
|};

export type ServiceAction = $Exact<FnReturn<typeof serviceAction>>;
