/* @flow */

import { TestAgentStore } from './TestAgentStore';
import { mountAppAction } from '../../../src/modules/main/actions';

export class TestAgentAction
{
  #store: TestAgentStore;

  constructor(store: TestAgentStore)
  {
    this.#store = store;
  }
  
  dispatch(action: Object) {
    this.#store.dispatch(action);
  }
  
  mount() { this.dispatch(mountAppAction()) }
}
