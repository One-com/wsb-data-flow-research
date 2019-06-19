/* @flow */

import type { BaseComponentState } from '../src/components/base/types';
import type { ComponentKindT } from '../src/components/types';
import { BaseComponentInitialState } from '../src/components/base/BaseComponentInitialState';

type Partial = $Shape<BaseComponentState>;

export const baseComponentStateGen = (kind: ComponentKindT, partial: Partial): BaseComponentState => ({
  ...BaseComponentInitialState,
  ...partial,
  kind,
});
