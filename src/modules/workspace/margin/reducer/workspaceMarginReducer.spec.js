/* @flow */

import { assertReducerInitialState } from '../../../../../specs/assertions/assertReducerInitialState';
import { WorkspaceMarginInitialState, workspaceMarginReducer as reducer } from './workspaceMarginReducer';

describe('workspaceMarginReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceMarginInitialState);
  });
});
