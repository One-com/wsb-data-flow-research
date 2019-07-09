/* @flow */

import { ServiceHandlerRegistryName } from './serviceHandlerRegistry';
import type { FnReturn } from '../common/commonTypes';
import { serviceHandlerAction } from './actions';

export type ServiceHandlerRegistryNameT = $Values<typeof ServiceHandlerRegistryName>;

export type ServiceHandlerRegistryT = {
  [k: ServiceHandlerRegistryNameT]: Object,
};

export type ServiceHandlerActionParams = {|
  service: {|
    name: ServiceHandlerRegistryNameT,
    method: string,
  |},
  types: {|
    request: string,
    success: string,
    failure: string,
  |},
|};

export type ServiceHandlerAction = $Exact<FnReturn<typeof serviceHandlerAction>>;
