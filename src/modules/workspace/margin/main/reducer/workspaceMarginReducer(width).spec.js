/* @flow */

import { WorkspaceMarginInitialState, workspaceMarginReducer as reducer } from './workspaceMarginReducer';
import { moveLeftWsmHandleAction } from '../../handles/actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';

describe('workspaceMarginReducer', () => {
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

  it('does not decrease width less than min threshold when moving left handle', () => {
    const
      state = {
        ...WorkspaceMarginInitialState,
        width: 1000,
      },
      action = moveLeftWsmHandleAction(530);

    expect(reducer(state, action, {wsWidth: 1700})).toEqual({
      ...state,
      width: MIN_WORKSPACE_MARGIN_WIDTH,
    });
  });
});
