/* @flow */

import { assertReducerInitialState } from '../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceStatusInitialState } from './workspaceStatusReducer';
import { setWorkspaceWidthAction } from '../width/actions';
import { WorkspaceStatus } from './constants';
import { testReducer } from '../../../../specs/testReducer';
import { workspaceStatusAppSel } from './selectors';

const reducer = testReducer(workspaceStatusAppSel);

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
