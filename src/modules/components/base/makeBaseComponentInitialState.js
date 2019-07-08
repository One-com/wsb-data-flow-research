/* @flow */

import type { ComponentKindT } from '../types';
import type { BaseComponentState } from './types';
import { uuid } from '../../../lib/uuid';

export const BaseComponentInitialPosition = {
  top: 10,
  left: 10,
};

export const makeBaseComponentInitialState = (kind: ComponentKindT): BaseComponentState => ({
  id: uuid(),
  kind,
  position: BaseComponentInitialPosition,
  dimensions: {
    width: 0,
    height: 0,
  },
  isSelected: false,
  isGhost: true,
});
