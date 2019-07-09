/* @flow */

import { assertReducerInitialState } from '../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceStatusInitialState } from './workspaceStatusReducer';
import { WorkspaceStatus } from './constants';
import { testReducer } from '../../../../specs/testReducer';
import { workspaceStatusAppSel } from './selectors';
import { serviceResultAction } from '../../serviceHandler/actions';
import { FETCH_APP_STATE_SUCCESS_ACTION } from '../../save/main/actions';
import { appStateGen } from '../../../../specs/generators/appStateGen';

const reducer = testReducer(workspaceStatusAppSel);

describe('workspaceStatusReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceStatusInitialState);
  });

  it('updates to ready when app state arrives', () => {
    const
      state = WorkspaceStatusInitialState,
      action = serviceResultAction({
        type: FETCH_APP_STATE_SUCCESS_ACTION,
        response: appStateGen(),
      });

    expect(reducer(state, action)).toEqual(WorkspaceStatus.READY);
  });
});
