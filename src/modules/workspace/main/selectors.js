/* @flow */

import { appSel } from '@sepo27/redux-di';
import type { AppSel } from '../../main/types';
import type { WorkspaceState } from './types';
import type { SelectorPath } from '../../../lib/functions/pathSelector';
import { Lit } from '../../common/Lit';

export const
  workspaceAppSel = (path?: SelectorPath = []): AppSel<WorkspaceState> =>
    appSel([Lit.workspace, ...path]);
