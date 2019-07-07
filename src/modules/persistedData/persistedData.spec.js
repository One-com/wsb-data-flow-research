/* @flow */

import { TestBench } from '../../../specs/bench/TestBench';
import { PERSISTED_DATA_KEY } from './constants';
import { workspaceMarginWidthAppSel } from '../workspace/margin/width/selectors';
import sinonLib from 'sinon';

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
    bench.stub.ls.getItem
      .returns(33);

    console.log('===local storage val', localStorage.getItem('blah'))
  });
});
