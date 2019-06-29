/* @flow */

import type { AppSel } from '../../main/types';
import type { WorkspaceState } from './types';
import type { SelectorPath } from '../../../lib/functions/pathSelector';
import { pathSelector } from '../../../lib/functions/pathSelector';
import { Lit } from '../../common/Lit';

export const
  workspaceAppSel = (path?: SelectorPath = []): AppSel<WorkspaceState> => pathSelector([Lit.workspace, ...path]);
