/* @flow */

import type { BaseComponentState } from '../../src/modules/components/base/types';
import type { ComponentKindT } from '../../src/modules/components/types';
import {
  makeBaseComponentInitialState,
} from '../../src/modules/components/base/makeBaseComponentInitialState';

export type BaseComponentStatePartial = $Shape<BaseComponentState>;

export const baseComponentStateGen = (kind: ComponentKindT, partial: BaseComponentStatePartial): BaseComponentState =>
  ({
    ...makeBaseComponentInitialState(kind),
    ...partial,
    kind,
  });
