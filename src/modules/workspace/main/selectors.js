/* @flow */

import type { AppSel } from '../../main/types';
import type { WorkspaceState } from './types';

export const
  workspaceAppSel: AppSel<WorkspaceState> = appState => appState.workspace;
