/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceMarginInitialState, workspaceMarginReducer as reducer } from './workspaceMarginReducer';
import { toggleWorkspaceMarginAction } from '../actions';

describe('workspaceMarginReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceMarginInitialState);
  });

  it('locks the margin', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        isLocked: false,
      },
      action = toggleWorkspaceMarginAction();
    
    expect(reducer(state, action)).toEqual({
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
    
    expect(reducer(state, action)).toEqual({
      ...state,
      isLocked: false,
    });
  });
});
