/* @flow */

import { getInitialAppState } from '../main/getInitialAppState';
import { TestBench } from '../../../specs/bench/TestBench';
import { componentsGen } from '../../../specs/generators/componentsGen';
import { workspaceMarginAppSel } from '../workspace/margin/main/selectors';
import { workspaceComponentsAppSel } from '../workspace/components/selectors';

describe('save', () => {
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

  xit('data is loaded upon mount', async () => {
    bench.stub.getStorageData({
      workspace: {
        margin: {
          width: 999,
          isLocked: true,
        },
        components: componentsGen([
          {
            id: '1',
          }
        ]),
      },
    });

    bench.agent.mountApp();

    (await bench.agent.assert.appState(workspaceMarginAppSel)).toMatchObject({
      width: 999,
      isLocked: true,
    });

    (await bench.agent.assert.appState(workspaceComponentsAppSel)).toHaveLength(1);
  });
});
