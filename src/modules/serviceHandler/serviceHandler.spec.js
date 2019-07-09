/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { ServiceHandlerRegistryClass } from './serviceHandlerRegistry';
import { serviceHandlerAction } from './actions';

const ServiceHandlerRegistryModule = require('./serviceHandlerRegistry');

describe('serviceHandler', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  });

  it('dispatches request action with params', () => {
    class TestService
    {
      getTestStuff() {
        return Promise.resolve();
      }
    }

    const
      tesetService = new TestService(),
      RegistryName = {
        TEST_SERVICE: 'testService',
      },
      Registry = {
        [RegistryName.TEST_SERVICE]: tesetService,
      };

    bench.stub.sinon
      .stub(ServiceHandlerRegistryModule, 'ServiceHandlerRegistryName')
      .value(RegistryName);

    bench.stub.sinon
      .stub(ServiceHandlerRegistryModule, 'serviceHandlerRegistry')
      .value(new ServiceHandlerRegistryClass(Registry));

    const action = serviceHandlerAction({
      service: {
        name: RegistryName.TEST_SERVICE,
        method: tesetService.getTestStuff.name,
      },
      actions: {
        request: 'TEST_REQUEST_ACTION',
        success: 'TEST_SUCCESS_ACTION',
        failure: 'TEST_FAILURE_ACTION',
      },
      params: ['123'],
    });

    bench.agent.mountApp();
    bench.agent.action.dispatch(action);

    bench.agent.assert.actionCalled('TEST_REQUEST_ACTION', {
      params: ['123'],
    });
  });
});
