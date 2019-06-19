/* @flow */

import {createStore} from 'redux';
import type { AppState, AppStore } from './types';
import { appReducer } from './appReducer';

export const createAppStore = (
  preloadedState: AppState | typeof undefined,
): AppStore => createStore(
  appReducer,
  preloadedState,
);
