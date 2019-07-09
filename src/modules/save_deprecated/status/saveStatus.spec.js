/* @flow */

import { TestBench } from '../../../../specs/bench/TestBench';
import { SaveStatus } from '../constants';
import { ComponentKind } from '../../components/ComponentKind';
import { dummyTestAction } from '../../../../specs/actions';

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

  it('is UNSAVED after change', async () => {
    bench.agent.mountApp();
    bench.agent.action.addComponent(ComponentKind.BUTTON);

    (await bench.agent.assert.saveStatus()).toBe(SaveStatus.UNSAVED)
  });

  it('is SAVED after dummy action', async () => {
    bench.agent.mountApp();

    (await bench.agent.assert.saveStatus()).toBe(SaveStatus.SAVED)

    bench.agent.action.dispatch(dummyTestAction());

    (await bench.agent.assert.saveStatus()).toBe(SaveStatus.SAVED)
  });

  it('is SAVED after saving', async () => {
    bench.agent.mountApp();

    bench.agent.action.addComponent(ComponentKind.BUTTON);
    bench.agent.action.save();

    (await bench.agent.assert.saveStatus()).toBe(SaveStatus.SAVED)
  });
});
