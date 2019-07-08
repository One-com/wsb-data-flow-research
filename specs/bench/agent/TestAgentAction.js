/* @flow */

import { TestAgentStore } from './TestAgentStore';
import { mountAppAction } from '../../../src/modules/main/actions';
import { saveAction } from '../../../src/modules/storage/actions';

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
  
  save() { this.dispatch(saveAction()) }
}
