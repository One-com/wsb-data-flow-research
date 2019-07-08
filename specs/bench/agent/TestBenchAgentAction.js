/* @flow */

import type { AppStore } from '../../../src/modules/main/types';
import { mountAppAction } from '../../../src/modules/main/actions';

export class TestBenchAgentAction
{
  #store: AppStore;

  constructor(store: AppStore)
  {
    this.#store = store;
  }
  
  dispatch(action: Object) {
    this.#store.dispatch(action);
  }
  
  mount() { this.dispatch(mountAppAction()) }
}
