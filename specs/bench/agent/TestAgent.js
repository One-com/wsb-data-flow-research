/* @flow */

import type { AppState } from '../../../src/modules/main/types';
import { TestAgentAction } from './TestAgentAction';
import { TestAgentAssert } from './TestAgentAssert';
import { TestAgentStore } from './TestAgentStore';

export class TestAgent
{
  store: TestAgentStore;

  action: TestAgentAction;

  assert: TestAgentAssert;

  constructor(preloadedState?: AppState = {})
  {
    this.store = new TestAgentStore(preloadedState);
    this.action = new TestAgentAction(this.store);
    this.assert = new TestAgentAssert(this.store);
  }

  mountApp()
  {
    this.action.mount();
  }
}
