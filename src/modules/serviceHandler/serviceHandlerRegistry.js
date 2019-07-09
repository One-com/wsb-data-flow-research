/* @flow */

import type { ServiceHandlerRegistryNameT, ServiceHandlerRegistryT } from './types';

export const ServiceHandlerRegistryName = {};

export class ServiceHandlerRegistryClass
{
  #list: ServiceHandlerRegistryT;

  constructor(list: ServiceHandlerRegistryT) {
    this.#list = list;
  }

  getService(name: ServiceHandlerRegistryNameT): Object {
    return this.#list[name];
  }
}

export const serviceHandlerRegistry = new ServiceHandlerRegistryClass({});
