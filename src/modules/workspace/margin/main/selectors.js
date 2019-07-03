/* @flow */

import { workspaceAppSel } from '../../main/selectors';
import type { AppSel } from '../../../main/types';
import { Lit } from '../../../common/Lit';
import type { SelectorPath } from '../../../../lib/functions/pathSelector';

export const
    workspaceMarginAppSel = (path?: SelectorPath = []): AppSel<any> => workspaceAppSel([Lit.margin, ...path]),
    isWorkspaceMarginLockedAppSel: AppSel<boolean> = workspaceMarginAppSel([Lit.isLocked]);
