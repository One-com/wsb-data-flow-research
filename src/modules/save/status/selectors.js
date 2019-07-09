/* @flow */

import { appSel } from '@sepo27/redux-di';
import type { AppSel } from '../../main/types';
import type { SaveStatusT } from './types';
import { Lit } from '../../common/Lit';

export const
  saveStatusAppSel: AppSel<SaveStatusT> = appSel([Lit.saveStatus]);
