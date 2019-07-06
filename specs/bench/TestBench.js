/* @flow */

import { TestBenchStub } from './TestBenchStub';
import { TestBenchAgent } from './agent/TestBenchAgent';
import type { AppState } from '../../src/modules/main/types';

export class TestBench {
  #$agent: TestBenchAgent;
  
  stub: TestBenchStub;

  get agent() {
    if (this.#$agent) return this.#$agent;
    throw new Error('Test bench agent is not initialized. Make sure to run bench.mount()');
  }

  constructor() {
    this.stub = new TestBenchStub();
  }

  mount(preloadedState?: AppState = {}) {
    this.#$agent = new TestBenchAgent(preloadedState);
    this.#$agent.mount();
  }

  restore() {
    this.stub.restore();
  }
}
