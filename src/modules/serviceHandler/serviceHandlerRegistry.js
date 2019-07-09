/* @flow */

import type { ServiceHandlerRegistryNameT, ServiceHandlerRegistryT } from './types';
import { storageService } from '../../services/storageService';

export const ServiceHandlerRegistryName = {
  STORAGE: 'storage',
};

export class ServiceHandlerRegistryClass
{
  #list: ServiceHandlerRegistryT;

  constructor(list: ServiceHandlerRegistryT) {
    this.#list = list;
  }

  getService(name: ServiceHandlerRegistryNameT): Object {
    console.log('===getService', this.#list)
    return this.#list[name];
  }
}

export const serviceHandlerRegistry = new ServiceHandlerRegistryClass({
  [ServiceHandlerRegistryName.STORAGE]: storageService,
});
