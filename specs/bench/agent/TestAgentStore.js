/* @flow */

import type { Action } from 'redux';
import type { AppSel, AppState, AppStore, AppStoreCreator } from '../../../src/modules/main/types';
import { createAppStore } from '../../../src/modules/main/createAppStore';

export class TestAgentStore
{
  #store: AppStore;
  #$dispatchedActions: Array<Action<string>> = [];

  constructor(preloadedState?: AppState = {})
  {
    this.#store = createAppStore(preloadedState, [this._storeEnhancer]);
  }

  dispatch(action: Object) {
    this.#store.dispatch(action);
  }

  getState<R: any = AppState>(selector?: AppSel<*> = s => s): Promise<R> {
    return new Promise(resolve => setTimeout(
      () => {
        // $FlowFixMe: TODO
        resolve(selector(this.#store.getState()));
      },
    ));
  }

  get dispatchedActions() { return this.#$dispatchedActions }

  _storeEnhancer = (createStore: AppStoreCreator): AppStoreCreator => (
    reducer,
    preloadedState,
    enhancer,
  ) => {
    const monitoredReducer = (state, action) => {
      this.#$dispatchedActions.push(action);

      return reducer(state, action);
    }

    // $FlowFixMe
    return createStore(monitoredReducer, preloadedState, enhancer);
  }
}
