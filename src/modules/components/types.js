/* @flow */

import * as React from 'react';
import type { MapT } from '../common/commonTypes';
import { ComponentKind } from './ComponentKind';
import type { BaseComponentState } from './base/types';

export type ComponentKindT = $Values<typeof ComponentKind>;

export type SingleComponentState<Shape: Object = Object> = BaseComponentState & Shape;

export type ComponentProps<StateShape: Object = Object> = {
  state: SingleComponentState<StateShape>,
};

export type SingleComponentUi = React.ComponentType<ComponentProps<>>;

export type ComponentsRegistryRecord = {
  initialState: () => SingleComponentState<>,
  Ui: SingleComponentUi,
};

export type ComponentsRegistryT = MapT<ComponentKindT, ComponentsRegistryRecord>;
