/* @flow */

import { TestBenchAgentStore } from './TestBenchAgentStore';
import { mountAppAction } from '../../../src/modules/main/actions';

export class TestBenchAgentAction
{
  #store: TestBenchAgentStore;

  constructor(store: TestBenchAgentStore)
  {
    this.#store = store;
  }
  
  dispatch(action: Object) {
    this.#store.dispatch(action);
  }
  
  mount() { this.dispatch(mountAppAction()) }
}
