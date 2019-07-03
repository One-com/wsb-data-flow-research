/* @flow */

import { assertReducerInitialState } from '../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceWidthInitialState } from './workspaceWidthReducer';
import { setWorkspaceWidthAction } from './actions';
import { testReducer } from '../../../../specs/testReducer';
import { workspaceWidthAppSel } from './selectors';

const reducer = testReducer(workspaceWidthAppSel);

describe('workspaceWidthReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceWidthInitialState);
  });

  it('sets the width', () => {
    const
      state = WorkspaceWidthInitialState,
      action = setWorkspaceWidthAction(1200);

    expect(reducer(state, action)).toEqual(1200);
  });
});
