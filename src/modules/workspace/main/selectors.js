/* @flow */

import { appSel } from '@sepo27/redux-di';
import type { AppSel } from '../../main/types';
import type { WorkspaceState } from './types';
import { Lit } from '../../common/Lit';

export const workspaceAppSel: AppSel<WorkspaceState> = appSel([Lit.workspace]);
