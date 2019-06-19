/* @flow */

import type { ComponentKindT } from '../types';
import type { BaseComponentState } from './types';

export const BaseComponentInitialState: $Diff<BaseComponentState, { kind: ComponentKindT }> = {
  position: {
    top: 10,
    left: 10,
  },
  selected: false,
};

