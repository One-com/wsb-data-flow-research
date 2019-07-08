/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { STORAGE_KEY } from './constants';
import { workspaceMarginAppSel } from '../workspace/margin/main/selectors';
import { componentsGen } from '../../../specs/generators/componentsGen';
import { workspaceComponentsAppSel } from '../workspace/components/selectors';

describe('storage', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  it('data is loaded upon mount', async () => {
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
