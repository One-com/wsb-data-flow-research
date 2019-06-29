/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceMarginInitialState, workspaceMarginReducer as reducer } from './workspaceMarginReducer';
import { toggleWorkspaceMarginAction } from '../actions';

describe('workspaceMarginReducer', () => {
  // TODO: this assertion should be able to accept dependencies
  xit('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceMarginInitialState);
  });

  it('locks the margin', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        isLocked: false,
      },
      action = toggleWorkspaceMarginAction();
    
    expect(reducer(state, action, {'width.wsWidth': 1700})).toEqual({
      ...state,
      isLocked: true,
    });
  });

  it('unlocks the margin', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        isLocked: true,
      },
      action = toggleWorkspaceMarginAction();
    
    expect(reducer(state, action, {'width.wsWidth': 1700})).toEqual({
      ...state,
      isLocked: false,
    });
  });
});
