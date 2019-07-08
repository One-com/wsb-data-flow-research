/* @flow */

import type { AppState } from './types';
import { appReducer } from './appReducer';

export const getInitialAppState = (): AppState => appReducer(undefined, {type: '@@INIT'});
