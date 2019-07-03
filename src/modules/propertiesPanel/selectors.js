/* @flow */

import { appSel } from '@sepo27/redux-di';
import type { AppSel } from '../main/types';
import type { PropertiesPanelState } from './types';
import { Lit } from '../common/Lit';

export const
  propertiesPanelAppSel: AppSel<PropertiesPanelState> = appSel([Lit.propertiesPanel]);
