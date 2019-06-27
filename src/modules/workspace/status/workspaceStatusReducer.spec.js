/* @flow */

import { assertReducerInitialState } from '../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceStatusInitialState, workspaceStatusReducer as reducer } from './workspaceStatusReducer';
import { setWorkspaceWidthAction } from '../width/actions';
import { WorkspaceStatus } from './constants';

describe('workspaceStatusReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceStatusInitialState);
  });

  it('updates to ready when setting workspace width', () => {
    const
      state = WorkspaceStatusInitialState,
      action = setWorkspaceWidthAction(1230);

    expect(reducer(state, action)).toEqual(WorkspaceStatus.READY);
  });
});
