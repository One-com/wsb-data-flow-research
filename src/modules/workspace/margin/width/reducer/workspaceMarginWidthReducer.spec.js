/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import {
  WorkspaceMarginWidthInitialState,
    // workspaceMarginWidthReducer as reducer,
} from './workspaceMarginWidthReducer';
import { moveLeftWorkspaceMarginHandleAction, moveRightWorkspaceMarginHandleAction } from '../actions';
import { MIN_WORKSPACE_MARGIN_WIDTH } from '../constants';
import { testReducer } from '../../../../../../specs/testReducer';
import { workspaceMarginWidthAppSel } from '../selectors';
import { workspaceWidthAppSel } from '../../../width/selectors';

const reducer = testReducer(workspaceMarginWidthAppSel);

describe('workspaceMarginWidthReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceMarginWidthInitialState);
  });

  it('increases width by moving left handle West', () => {
    const
      state = 900,
      action = moveLeftWorkspaceMarginHandleAction(350),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(1000);
  });

  it('does not increase with more than workspace width by left handle', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(-10),
      deps = {
        [workspaceWidthAppSel]: 1800,
      };

    expect(reducer(state, action, deps)).toEqual(1800);
  });

  it('decreases width by moving left handle East', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(450),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(800);
  });

  it('does not decrease width less than min threshold when moving left handle', () => {
    const
      state = 1000,
      action = moveLeftWorkspaceMarginHandleAction(900),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(MIN_WORKSPACE_MARGIN_WIDTH);
  });

  it('increases width by moving right handle East', () => {
    const
      state = 900,
      action = moveRightWorkspaceMarginHandleAction(1350),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(1000);
  });

  it('does not increase with more than workspace width by right handle', () => {
    const
      state = 1000,
      action = moveRightWorkspaceMarginHandleAction(1850),
      deps = {
        [workspaceWidthAppSel]: 1800,
      };

    expect(reducer(state, action, deps)).toEqual(1800);
  });

  it('decreases width by moving right handle West', () => {
    const
      state = 1000,
      action = moveRightWorkspaceMarginHandleAction(1300),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(900);
  });

  it('does not decrease width less than min threshold when moving right handle', () => {
    const
      state = 1000,
      action = moveRightWorkspaceMarginHandleAction(800),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual(MIN_WORKSPACE_MARGIN_WIDTH);
  });
});
