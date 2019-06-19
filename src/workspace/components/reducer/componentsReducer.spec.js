/* @flow */

import {
  ComponentsInitialState,
  componentsReducer as reducer,
} from './componentsReducer';
import { assertReducerInitialState } from '../../../../specs/assertReducerInitialState';
import { addComponentAction } from '../actions';
import { ComponentKind } from '../../../components/ComponentKind';
import { ComponentsRegistry } from '../../../components/ComponentsRegistry';

describe('componentsReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, ComponentsInitialState);
  });

  it('adds component', () => {
    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action)).toEqual([
      ComponentsRegistry[ComponentKind.BUTTON].initialState,
    ]);
  });
});

