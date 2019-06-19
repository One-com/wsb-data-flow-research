/* @flow */

import * as React from 'react';
import type { MapT } from '../common/commonTypes';
import { ComponentKind } from './ComponentKind';
import type { BaseComponentState } from './base/types';

export type ComponentKindT = $Values<typeof ComponentKind>;

export type ComponentState<Shape: Object = Object> = BaseComponentState & Shape;

export type ComponentProps<StateShape: Object = Object> = {
  state: ComponentState<StateShape>,
};

export type ComponentsRegistryItem = {
  initialState: ComponentState<>,
  Ui: React.ComponentType<ComponentProps<>>,
};

export type ComponentsRegistryT = MapT<ComponentKindT, ComponentsRegistryItem>;
