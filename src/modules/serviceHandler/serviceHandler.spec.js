/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';

const ServiceHandlerRegistryModule = require('./serviceHandlerRegistry');

describe('serviceHandler', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
  })

  afterEach(() => {
    bench.restore();
  });

  it('dispatches request action', () => {
    bench.stub.sinon
      .stub(ServiceHandlerRegistryModule, 'ServiceHandlerRegistryName')
      .value({
        TEST_SERVICE: 'testService',
      });

    bench.mountAppAgent();
    bench.agent.mountApp();
  });
});
