/* @flow */

import type { AppSel } from '../../../main/types';
import { Lit } from '../../../common/Lit';
import type { SelectorPath } from '../../../../lib/functions/pathSelector';
import { workspaceAppSel } from '../../main/selectors';

export const
    workspaceMarginAppSel = (path?: SelectorPath = []): AppSel<any> => workspaceAppSel([Lit.margin, ...path]),
    isWorkspaceMarginLockedAppSel: AppSel<boolean> = workspaceMarginAppSel([Lit.isLocked]);
