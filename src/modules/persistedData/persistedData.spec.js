/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { PERSISTED_DATA_KEY } from './constants';
import { workspaceMarginWidthAppSel } from '../workspace/margin/width/selectors';

describe('persistedData', () => {
  let bench: TestBench;
  
  beforeEach(() => {
    bench = new TestBench();
    bench.mountAppAgent();
  })
  
  afterEach(() => {
    bench.restore();
  })
  
  it('is loaded upon mount', () => {
    const persistedData = {
      workspace: {
        margin: {
          width: 1000,
          isLocked: false,
        },
        components: [],
      },
    };

    bench.stub.ls.getItem
      .withArgs(PERSISTED_DATA_KEY)
      .returns(persistedData);

    console.log('===data', window.localStorage.getItem(PERSISTED_DATA_KEY));
    
    // bench.agent.action.mount();
    //
    // bench.agent.assert.appState(workspaceMarginWidthAppSel).toEqual(1000);
  });
});
