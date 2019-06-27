/* @flow */

import { assertReducerInitialState } from '../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceWidthInitialState, workspaceWidthReducer as reducer } from './workspaceWidthReducer';
import { setWorkspaceWidthAction } from './actions';

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
