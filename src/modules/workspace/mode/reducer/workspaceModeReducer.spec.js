/* @flow */

import {
  WorkspaceModeReducerInitialState,
  workspaceModeReducer as reducer,
} from './workspaceModeReducer';
import { assertReducerInitialState } from '../../../../../specs/assertions/assertReducerInitialState';
import { releaseComponentAction, touchComponentAction } from '../../components/actions';
import { WorkspaceMode } from '../WorkspaceMode';
import { releaseWorkspaceAction, touchWorkspaceAction } from '../../main/actions';

describe('workspaceModeReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceModeReducerInitialState);
  });

  it('updates to moving_component on workspace touch', () => {
    const
      state = WorkspaceModeReducerInitialState,
      action = touchWorkspaceAction({top: 0, left: 0});

    expect(reducer(state, action)).toEqual(WorkspaceMode.MOVING_COMPONENTS);
  });

  it('updates to idle on component release', () => {
    const
      state = WorkspaceMode.MOVING_COMPONENTS,
      action = releaseWorkspaceAction({top: 0, left: 0});

    expect(reducer(state, action)).toEqual(WorkspaceMode.IDLE);
  });
});
