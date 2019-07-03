/* @flow */

import { workspaceAppSel } from '../main/selectors';
import { Lit } from '../../common/Lit';
import type { AppSel } from '../../main/types';
import type { ComponentsState } from './types';

export const workspaceComponentsAppSel: AppSel<ComponentsState> = workspaceAppSel.spawn([Lit.components]);
