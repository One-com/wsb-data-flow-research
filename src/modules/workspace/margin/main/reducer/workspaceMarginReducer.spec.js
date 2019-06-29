/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceMarginInitialState, workspaceMarginReducer as reducer } from './workspaceMarginReducer';
import { toggleWorkspaceMarginAction } from '../actions';
import { moveLeftWsmHandleAction } from '../../handles/actions';

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
    
    expect(reducer(state, action, {wsWidth: 1700})).toEqual({
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
    
    expect(reducer(state, action, {wsWidth: 1700})).toEqual({
      ...state,
      isLocked: false,
    });
  });

  it('increases width by moving left handle left', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        width: 900,
      },
      action = moveLeftWsmHandleAction(-50);
    
    expect(reducer(state, action, {wsWidth: 1700})).toEqual({
      ...state,
      width: 1000,
    });
  });

  it('does not increase with more than workspace width by left handle', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        width: 1000,
      },
      action = moveLeftWsmHandleAction(-420);
    
    expect(reducer(state, action, {wsWidth: 1800})).toEqual({
      ...state,
      width: 1800,
    });
  });

  it('decreases width by moving left handle right', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        width: 1000,
      },
      action = moveLeftWsmHandleAction(30);

    expect(reducer(state, action, {wsWidth: 1700})).toEqual({
      ...state,
      width: 940,
    });
  });
});
