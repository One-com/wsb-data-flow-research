/* @flow */

import { ServiceHandlerRegistryName } from './serviceHandlerRegistry';
import type { FnReturn } from '../common/commonTypes';
import { serviceHandlerAction } from './actions';

export type ServiceHandlerRegistryNameT = $Values<typeof ServiceHandlerRegistryName>;

export type ServiceHandlerRegistryT = {
  [k: ServiceHandlerRegistryNameT]: Object,
};

export type ServiceHandlerActionService = {|
  name: ServiceHandlerRegistryNameT,
  method: string,
|};

export type ServiceHandlerActionParams = {|
  service: ServiceHandlerActionService,
  actions: {|
    request: string,
    success: string,
    failure: string,
  |},
  params?: Array<any>,
|};

export type InstanceServiceHandlerActionParams = {|
  ...$Diff<ServiceHandlerActionParams, { service: ServiceHandlerActionService }>,
  serviceMethod: string,
|};

export type ServiceHandlerAction = $Exact<FnReturn<typeof serviceHandlerAction>>;
