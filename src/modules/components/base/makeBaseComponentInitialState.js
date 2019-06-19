/* @flow */

import type { ComponentKindT } from '../types';
import type { BaseComponentState } from './types';
import { uuid } from '../../../lib/uuid';

export const makeBaseComponentInitialState = (kind: ComponentKindT): BaseComponentState => ({
  id: uuid(),
  kind,
  position: {
    top: 10,
    left: 10,
  },
  isSelected: false,
});
