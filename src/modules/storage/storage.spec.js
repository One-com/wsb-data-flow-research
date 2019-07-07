/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { STORAGE_KEY } from './constants';
import { workspaceMarginAppSel } from '../workspace/margin/main/selectors';
import { wsbStorage } from '../../services/wsbStorage';

describe('storage', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  // TODO
  xit('loads data upon mount', async () => {
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
      .returns(JSON.stringify(persistedData));

    bench.agent.mountApp();

    (await bench.agent.assert.appState(workspaceMarginAppSel)).toMatchObject({
      width: 999,
      isLocked: true,
    });
  });
});
