/* @flow */

import type { AppSel } from '../../../src/modules/main/types';
import { TestBenchAgentStore } from './TestBenchAgentStore';

export class TestBenchAgentAssert
{
  #store: TestBenchAgentStore;

  constructor(store: TestBenchAgentStore)
  {
    this.#store = store;
  }

  appState(selector?: AppSel<*> = s => s): Promise<JestExpectType> {
    return this.#store.getState(selector).then(state => expect(state));
  }
}
