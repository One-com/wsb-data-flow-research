/* @flow */

import type {
  ComponentKindT,
  ComponentsRegistryRecord,
  ComponentsRegistryT,
  SingleComponentState,
  SingleComponentUi,
} from './types';
import { ComponentKind } from './ComponentKind';
import { ButtonComponentRecord } from './button/ButtonConfig';

class ComponentsRegistryClass {
  _registry: ComponentsRegistryT;

  constructor() {
    this._registry = {
      [ComponentKind.BUTTON]: ButtonComponentRecord,
    };
  }

  getRecord(kind: ComponentKindT): ComponentsRegistryRecord {
    if (this._registry[kind]) return this._registry[kind];
    throw new Error(`Missing component registry record for kind: ${kind}`);
  }

  getInitialState<R = SingleComponentState<>>(kind: ComponentKindT): R {
    return this.getRecord(kind).initialState();
  }

  getUi(kind: ComponentKindT): SingleComponentUi {
    return this.getRecord(kind).Ui;
  }
}

export const comRegistry = new ComponentsRegistryClass();
