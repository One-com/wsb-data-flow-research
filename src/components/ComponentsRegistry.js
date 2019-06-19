/* @flow */

import type { ComponentsRegistryT } from './types';
import { ComponentKind } from './ComponentKind';
import { ButtonComponentRecord } from './button/ButtonConfig';

export const ComponentsRegistry: ComponentsRegistryT = {
  [ComponentKind.BUTTON]: ButtonComponentRecord,
};
