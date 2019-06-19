/* @flow */

import type { Position } from '../common/commonTypes';
import { ComponentKind } from './ComponentKind';

export type ComponentKindT = $Values<typeof ComponentKind>;

export type BaseComponentState = {
  kind: ComponentKindT,
  position: Position,
  selected: boolean,
};
