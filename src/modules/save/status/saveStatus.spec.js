/* @flow */

import { TestBench } from '../../../../specs/bench/TestBench';
import { SaveStatus } from '../constants';

describe('saveStatus', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  it('is SAVED when first loaded', async () => {
    bench.agent.mountApp();
    (await bench.agent.assert.saveStatus()).toBe(SaveStatus.SAVED)
  });
});
