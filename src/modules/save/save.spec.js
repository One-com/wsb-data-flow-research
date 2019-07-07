/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';

describe('save', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  xit('status is SAVED when first loaded', () => {

  });
});
