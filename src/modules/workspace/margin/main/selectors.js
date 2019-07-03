/* @flow */

import { workspaceAppSel } from '../../main/selectors';
import type { AppSel } from '../../../main/types';
import { Lit } from '../../../common/Lit';

export const
    workspaceMarginAppSel: AppSel<any> = workspaceAppSel.spawn([Lit.margin]),
    isWorkspaceMarginLockedAppSel: AppSel<boolean> = workspaceMarginAppSel.spawn([Lit.isLocked]);
