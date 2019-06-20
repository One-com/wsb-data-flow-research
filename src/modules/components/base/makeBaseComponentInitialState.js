/* @flow */

import type { ComponentKindT } from '../types';
import type { BaseComponentState } from './types';
import { uuid } from '../../../lib/functions/uuid';

export const makeBaseComponentInitialState = (kind: ComponentKindT): BaseComponentState => ({
  id: uuid(),
  kind,
  position: {
    top: 10,
    left: 10,
  },
  dimensions: {
    width: 0,
    height: 0,
  },
  isSelected: false,
  isGhost: true,
});
