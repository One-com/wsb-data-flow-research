/* @flow */

import type { AppSel, AppStore } from '../../../src/modules/main/types';

export class TestBenchAgentAssert
{
  #store: AppStore;

  constructor(store: AppStore)
  {
    this.#store = store;
  }

  appState(selector: AppSel<*>): Promise<JestExpectType> {
    return this._getAppState().then(appState => expect(selector(appState)));
  }

  _getAppState() {
    return new Promise(resolve => setTimeout(
      () => {
        const appState = this.#store.getState();
        resolve(appState);
      },
    ));
  }
}
