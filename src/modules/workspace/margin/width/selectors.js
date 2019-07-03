/* @flow */

import { workspaceMarginAppSel } from '../main/selectors';
import { Lit } from '../../../common/Lit';
import type { AppSel } from '../../../main/types';
import type { WorkspaceMarginWidthState } from './types';

export const
  workspaceMarginWidthAppSel: AppSel<WorkspaceMarginWidthState> = workspaceMarginAppSel.spawn([Lit.width]);
