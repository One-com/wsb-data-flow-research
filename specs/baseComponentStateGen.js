/* @flow */

import type { BaseComponentState } from '../src/modules/components/base/types';
import type { ComponentKindT } from '../src/modules/components/types';
import {
  makeBaseComponentInitialState,
} from '../src/modules/components/base/makeBaseComponentInitialState';

type Partial = $Shape<BaseComponentState>;

export const baseComponentStateGen = (kind: ComponentKindT, partial: Partial): BaseComponentState => ({
  ...makeBaseComponentInitialState(kind),
  ...partial,
  kind,
});
