/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import {
  WorkspaceMarginWidthInitialState,
  workspaceMarginWidthReducer as reducer,
} from './workspaceMarginWidthReducer';
import { moveLeftWorkspaceMarginHandleAction } from '../actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';

describe('workspaceMarginWidthReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceMarginWidthInitialState);
  });

  it('increases width by moving left handle West', () => {
    const
      state = 900,
      action = moveLeftWorkspaceMarginHandleAction(350);

    expect(reducer(state, action, {wsWidth: 1700})).toEqual(1000);
  });

  it('does not increase with more than workspace width by left handle', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(-10);

    expect(reducer(state, action, {wsWidth: 1800})).toEqual(1800);
  });

  it('decreases width by moving left handle East', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(450);

    expect(reducer(state, action, {wsWidth: 1700})).toEqual(800);
  });

  it('does not decrease width less than min threshold when moving left handle', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(900);

    expect(reducer(state, action, {wsWidth: 1700})).toEqual(MIN_WORKSPACE_MARGIN_WIDTH);
  });
});
