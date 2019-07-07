/* @flow */

import { TestBenchStub } from './stub/TestBenchStub';
import { TestBenchAgent } from './agent/TestBenchAgent';
import type { AppState } from '../../src/modules/main/types';

export class TestBench {
  #$agent: TestBenchAgent | null = null;

  stub: TestBenchStub;

  get agent() {
    if (this.#$agent) return this.#$agent;
    throw new Error('Test bench agent is not initialized. Make sure to run bench.mountAppAgent()');
  }

  constructor() {
    this.stub = new TestBenchStub();
  }

  mountAppAgent(preloadedState?: AppState = {}) {
    this.#$agent = new TestBenchAgent(preloadedState);
  }

  restore() {
    this.stub.restore();
    this.#$agent = null;
  }
}
