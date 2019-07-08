/* @flow */

import { initReducer } from '@sepo27/redux-di';
import { SaveStatus } from '../constants';

export const SaveStatusInitialState = SaveStatus.SAVED;

export const saveStatusReducer = initReducer(SaveStatusInitialState, s => s);
