/* @flow */

import {
  ComponentsInitialState,
  componentsReducer as reducer,
} from './componentsReducer';
import { assertReducerInitialState } from '../../../../../specs/assertions/assertReducerInitialState';
import { addComponentAction, selectComponentAction } from '../actions';
import { ComponentKind } from '../../../components/ComponentKind';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { baseComponentStateGen } from '../../../../../specs/generators/baseComponentStateGen';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';
import { TestBench } from '../../../../../specs/bench/TestBench';

describe('componentsReducer', () => {
  let bench: TestBench;

  beforeEach(() => {
    bench = new TestBench();
  })

  afterEach(() => {
    bench.restore();
  })

  it('resolves initial state', () => {
    assertReducerInitialState(reducer, ComponentsInitialState);
  });

  it('adds component', () => {
    bench.stub.uuid.returns('123');

    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action)).toEqual([
      comRegistry.getInitialState(ComponentKind.BUTTON),
    ]);
  });

  it('adds new component with position shift', () => {
    bench.stub.uuidCycle(2);

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

  it('selects component', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
      }),
      state = [com],
      action = selectComponentAction('321');

    expect(reducer(state, action)).toEqual([
      {
        ...com,
        selected: true,
      }
    ]);
  });

  it('deselects other components when selecting one', () => {
    const
      com1 = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '1',
        selected: true,
      }),
      com2 = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '2',
        selected: false,
      }),
      state = [com1, com2];

    expect(reducer(state, selectComponentAction('2'))).toEqual([
      {
        ...com1,
        selected: false,
      },
      {
        ...com2,
        selected: true,
      },
    ]);
  });
});

