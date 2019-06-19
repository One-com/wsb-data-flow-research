/* @flow */

import { ComponentKind } from './ComponentKind';
import type { BaseComponentState, ComponentKindT } from './types';

const BaseComponentInitialState: $Diff<BaseComponentState, { kind: ComponentKindT }> = {
  position: {
    top: 10,
    left: 10,
  },
  selected: false,
};

export const ComponentInitialStateMap = {
  [ComponentKind.BUTTON]: BaseComponentInitialState,
};
