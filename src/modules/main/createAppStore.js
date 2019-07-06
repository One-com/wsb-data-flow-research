/* @flow */

import {createStore, applyMiddleware, compose} from 'redux';
import type { AppState, AppStore } from './types';
import { appReducer } from './appReducer';
import { AppMiddlewares } from './AppMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = (
  preloadedState?: AppState = {}
): AppStore => createStore(
  appReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...AppMiddlewares)),
);
