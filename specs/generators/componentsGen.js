/* @flow */

import type { BaseComponentStatePartial } from './baseComponentStateGen';
import type { ComponentKindT } from '../../src/modules/components/types';
import { baseComponentStateGen } from './baseComponentStateGen';
import type { Components } from '../../src/modules/workspace/components/types';

type Partial = Array<BaseComponentStatePartial & {kind: ComponentKindT}>;

export const componentsGen = (partial: Partial): Components => partial.map(
  ({kind, ...partial}) => baseComponentStateGen(kind, partial),
);
