/* @flow */

import {
  ComponentsInitialState,
  componentsReducer as reducer,
} from './componentsReducer';
import { assertReducerInitialState } from '../../../../specs/assertReducerInitialState';
import { addComponentAction } from '../actions';
import { ComponentKind } from '../../../workspaceComponents/ComponentKind';
import { ComponentInitialStateMap } from '../../../workspaceComponents/ComponentInitialStateMap';

describe('componentsReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, ComponentsInitialState);
  });

  it('adds component', () => {
    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action)).toEqual([
      ComponentInitialStateMap[ComponentKind.BUTTON],
    ]);
  });
});

