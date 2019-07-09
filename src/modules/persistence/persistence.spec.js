/* @flow */

import { getInitialAppState } from '../main/getInitialAppState';
import { TestBench } from '../../../specs/bench/TestBench';

describe('persistence', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  it('empty data results to initial app state', async () => {
    bench.stub.getStorageData(null);

    bench.agent.mountApp();

    (await bench.agent.assert.appState()).toEqual(getInitialAppState());
  });
});
