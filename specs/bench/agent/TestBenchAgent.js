/* @flow */

import type { AppState, AppStore } from '../../../src/modules/main/types';
import { createAppStore } from '../../../src/modules/main/createAppStore';
import { TestBenchAgentAction } from './TestBenchAgentAction';
import { TestBenchAgentAssert } from './TestBenchAgentAssert';

export class TestBenchAgent
{
  #store: AppStore;
  
  action: TestBenchAgentAction;
  
  assert: TestBenchAgentAssert;

  constructor(preloadedState?: AppState = {})
  {
    this.#store = createAppStore(preloadedState);
    this.action = new TestBenchAgentAction(this.#store);
    this.assert = new TestBenchAgentAssert(this.#store);
  }

  mount()
  {
    this.action.mount();
  }
}
