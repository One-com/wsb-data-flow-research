/* @flow */

import {
  WorkspaceComponentsReducerInitialState,
  workspaceComponentsReducer as reducer,
} from './workspaceComponentsReducer';
import { assertReducerInitialState } from '../../../specs/assertReducerInitialState';

describe('workspaceComponentsReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, WorkspaceComponentsReducerInitialState);
  });
});

