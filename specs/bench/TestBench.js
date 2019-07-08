/* @flow */

import { TestStub } from './stub/TestStub';
import { TestAgent } from './agent/TestAgent';
import type { AppState } from '../../src/modules/main/types';

export class TestBench {
  #$agent: TestAgent | null = null;

  stub: TestStub;

  get agent() {
    if (this.#$agent) return this.#$agent;
    throw new Error('Test bench agent is not initialized. Make sure to run bench.mountAppAgent()');
  }

  constructor() {
    this.stub = new TestStub();
  }

  mountAppAgent(preloadedState?: AppState = {}) {
    this.#$agent = new TestAgent(preloadedState);
  }

  restore() {
    this.stub.restore();
    this.#$agent = null;
  }
}
