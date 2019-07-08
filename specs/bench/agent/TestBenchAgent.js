/* @flow */

import type { AppState } from '../../../src/modules/main/types';
import { TestBenchAgentAction } from './TestBenchAgentAction';
import { TestBenchAgentAssert } from './TestBenchAgentAssert';
import { TestBenchAgentStore } from './TestBenchAgentStore';

export class TestBenchAgent
{
  store: TestBenchAgentStore;

  action: TestBenchAgentAction;

  assert: TestBenchAgentAssert;

  constructor(preloadedState?: AppState = {})
  {
    this.store = new TestBenchAgentStore(preloadedState);
    this.action = new TestBenchAgentAction(this.store);
    this.assert = new TestBenchAgentAssert(this.store);
  }

  mountApp()
  {
    this.action.mount();
  }
}
