/* @flow */

import { workspaceMarginAppSel } from '../main/selectors';
import { Lit } from '../../../common/Lit';
import type { AppSel, AppState } from '../../../main/types';
import type { WorkspaceMarginWidthState } from './types';

export const
  workspaceMarginWidthAppSel: AppSel<WorkspaceMarginWidthState> = workspaceMarginAppSel([Lit.width]);
