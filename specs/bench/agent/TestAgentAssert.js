/* @flow */

import type { AppSel } from '../../../src/modules/main/types';
import { TestAgentStore } from './TestAgentStore';

export class TestAgentAssert
{
  #store: TestAgentStore;

  constructor(store: TestAgentStore)
  {
    this.#store = store;
  }

  appState(selector?: AppSel<*> = s => s): Promise<JestExpectType> {
    return this.#store.getState(selector).then(state => expect(state));
  }
}
