/* @flow */

import { TestBench } from '../../../../specs/bench/TestBench';
import { componentsGen } from '../../../../specs/generators/componentsGen';
import { workspaceMarginAppSel } from '../../workspace/margin/main/selectors';
import { workspaceComponentsAppSel } from '../../workspace/components/selectors';
import { addComponentAction } from '../../workspace/components/actions';
import { ComponentKind } from '../../components/ComponentKind';
import { Lit } from '../../common/Lit';
import { SaveStatus } from '../../save/status/constants';
import { APP_STATE_SAVE_KEY } from './constants';
import { WorkspaceStatus } from '../../workspace/status/constants';

describe('save', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })

  afterEach(() => {
    bench.restore();
  })

  // TODO: needs app initial state proper generator
  xit('empty data results to initial app state', async () => {
    bench.stub.getStorageData(null);

    bench.agent.mountApp();

    (await bench.agent.assert.appState()).toEqual({});
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

    const expectedAppStateToSave = await bench.agent.store.getState();
    expectedAppStateToSave[Lit.saveStatus] = SaveStatus.SAVED;
    expectedAppStateToSave[Lit.workspace][Lit.status] = WorkspaceStatus.READY;

    // TODO: abstract out to bench
    const
      setItemCalls = bench.stub.ls.setItem.getCalls(),
      [arg1, arg2] = setItemCalls.length && setItemCalls[0]
        ? setItemCalls[0].args
        : [null, null];

    expect(arg1).toEqual(APP_STATE_SAVE_KEY);
    expect(arg2).toEqual(JSON.stringify(expectedAppStateToSave));
  });
});
