/* @flow */

import { createStore, applyMiddleware, compose, type StoreEnhancer } from 'redux';
import type { AppState, AppStore } from './types';
import { appReducer } from './appReducer';
import { AppMiddlewares } from './AppMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = (
  preloadedState?: AppState = {},
  enhancers?: Array<StoreEnhancer<AppState, Object>> = [],
): AppStore => createStore(
  appReducer,
  preloadedState,
  // $FlowFixMe
  composeEnhancers(applyMiddleware(...AppMiddlewares), ...enhancers),
);
