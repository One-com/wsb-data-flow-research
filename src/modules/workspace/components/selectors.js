/* @flow */

import { workspaceAppSel } from '../main/selectors';
import { Lit } from '../../common/Lit';

export const workspaceComponentsAppSel = workspaceAppSel([Lit.components]);
