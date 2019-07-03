/* @flow */

import { assertReducerInitialState } from '../../../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceMarginInitialState } from './workspaceMarginReducer';
import { toggleWorkspaceMarginAction } from '../actions';
import { workspaceWidthAppSel } from '../../../width/selectors';
import { testReducer } from '../../../../../../specs/testReducer';
import { workspaceMarginAppSel } from '../selectors';

const reducer = testReducer(workspaceMarginAppSel);

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
      action = toggleWorkspaceMarginAction(),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual({
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
      action = toggleWorkspaceMarginAction(),
      deps = {
        [workspaceWidthAppSel]: 1700,
      };

    expect(reducer(state, action, deps)).toEqual({
      ...state,
      isLocked: false,
    });
  });
});
