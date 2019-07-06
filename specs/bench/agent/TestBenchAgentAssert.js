/* @flow */

import type { AppSel, AppStore } from '../../../src/modules/main/types';

export class TestBenchAgentAssert
{
  #store: AppStore;

  constructor(store: AppStore)
  {
    this.#store = store;
  }
  
  appState(selector: AppSel<*>): JestExpectType {
    return expect(selector(this.#store.getState()));
  }
}
