/* @flow */

import {testAppReducer} from '@sepo27/redux-di';
import type { AppSel } from '../src/modules/main/types';
import { appReducer } from '../src/modules/main/appReducer';

export const testReducer = (selector: AppSel<*>) => testAppReducer(appReducer, selector);
