/* @flow */

import type { AppSel } from '../../main/types';
import type { WorkspaceStatusT } from './types';
import { workspaceAppSel } from '../main/selectors';
import { Lit } from '../../common/Lit';

// $FlowFixMe
export const workspaceStatusAppSel = (): AppSel<WorkspaceStatusT> => workspaceAppSel([Lit.status]);
