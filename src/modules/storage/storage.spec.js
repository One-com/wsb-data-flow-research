/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { STORAGE_KEY } from './constants';
import { workspaceMarginAppSel } from '../workspace/margin/main/selectors';

describe('storage', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  xit('loads data upon mount', () => {
    const persistedData = {
      workspace: {
        margin: {
          width: 999,
          isLocked: true,
        },
        components: [],
      },
    };

    bench.stub.ls.getItem
      .withArgs(STORAGE_KEY)
      .returns(persistedData);

    bench.agent.mountApp();

    bench.agent.assert.appState(workspaceMarginAppSel).toMatchObject({
      width: 999,
      isLocked: true,
    });
  });
});
