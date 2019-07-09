/* @flow */

import type { ServiceHandlerRegistryT } from './types';

export const ServiceHandlerRegistryName = {};

export class ServiceHandlerRegistryClass
{
  #list: ServiceHandlerRegistryT;

  constructor(list: ServiceHandlerRegistryT) {
    this.#list = list;
  }
}

export const serviceHandlerRegistry = new ServiceHandlerRegistryClass({});
