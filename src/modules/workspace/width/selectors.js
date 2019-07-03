/* @flow */

import { workspaceAppSel } from '../main/selectors';
import type { AppSel } from '../../main/types';
import { Lit } from '../../common/Lit';
import type { WorkspaceWidthState } from './types';

export const
  // $FlowFixMe
  workspaceWidthAppSel: AppSel<WorkspaceWidthState> = workspaceAppSel([Lit.width]);
