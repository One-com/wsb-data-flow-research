/* @flow */

import {
  ComponentsInitialState,
  componentsReducer as reducer,
} from './componentsReducer';
import { assertReducerInitialState } from '../../../../specs/assertReducerInitialState';
import { addComponentAction } from '../actions';
import { ComponentKind } from '../../../components/ComponentKind';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { baseComponentStateGen } from '../../../../specs/baseComponentStateGen';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';

describe('componentsReducer', () => {
  it('resolves initial state', () => {
    assertReducerInitialState(reducer, ComponentsInitialState);
  });

  it('adds component', () => {
    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action)).toEqual([
      comRegistry.getInitialState(ComponentKind.BUTTON),
    ]);
  });

  it('adds new component with position shift', () => {
    const
      baseCom = baseComponentStateGen(ComponentKind.BUTTON),
      state = [baseCom],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action)).toEqual([
      comRegistry.getInitialState(ComponentKind.BUTTON),
      {
        ...comRegistry.getInitialState(ComponentKind.BUTTON),
        position: {
          top: baseCom.position.top + NEW_COMPONENT_POSITION_SHIFT_DISTANCE,
          left: baseCom.position.left + NEW_COMPONENT_POSITION_SHIFT_DISTANCE,
        },
      },
    ]);
  });
});

