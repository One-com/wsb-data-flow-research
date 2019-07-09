/* @flow */

import type { ServiceRegistryNameT } from './types';
import { ServiceRegistryIndex } from './ServiceRegistryIndex';

class ServiceRegistry
{
  getService(name: ServiceRegistryNameT): Object {
    return ServiceRegistryIndex[name];
  }
}

export const serviceRegistry = new ServiceRegistry();
