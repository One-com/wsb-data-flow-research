/* @flow */

import { TestBenchStub } from './TestBenchStub';

export class TestBench {
  stub: TestBenchStub;

  constructor() {
    this.stub = new TestBenchStub();
  }

  restore() {
    this.stub.restore();
  }
}
