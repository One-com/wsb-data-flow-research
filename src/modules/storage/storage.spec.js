/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { workspaceMarginAppSel } from '../workspace/margin/main/selectors';
import { componentsGen } from '../../../specs/generators/componentsGen';
import { workspaceComponentsAppSel } from '../workspace/components/selectors';
import { getInitialAppState } from '../main/getInitialAppState';
import { addComponentAction } from '../workspace/components/actions';
import { ComponentKind } from '../components/ComponentKind';
import { STORAGE_KEY } from './constants';

describe('storage', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  it('empty storage data results to initial app state', async () => {
    bench.stub.getStorageData(null);

    bench.agent.mountApp();

    (await bench.agent.assert.appState()).toEqual(getInitialAppState());
  });

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

  it('data is saved', async () => {
    bench.stub.setStorageData();
    
    bench.agent.mountApp();
    bench.agent.action.dispatch(addComponentAction(ComponentKind.BUTTON));
    bench.agent.action.save();

    const appState = await bench.agent.store.getState();
    
    expect(bench.stub.ls.setItem.calledWith(STORAGE_KEY, JSON.stringify(appState))).toBeTruthy();
  });
});
