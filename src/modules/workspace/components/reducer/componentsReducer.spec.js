/* @flow */

import {
  ComponentsInitialState,
  componentsReducer as reducer,
} from './componentsReducer';
import { assertReducerInitialState } from '../../../../../specs/assertions/assertReducerInitialState';
import {
  addComponentAction,
  deselectComponentAction,
  moveComponentAction,
  newComponentMeasuredAction,
  selectComponentAction,
} from '../actions';
import { ComponentKind } from '../../../components/ComponentKind';
import { comRegistry } from '../../../components/ComponentsRegistry';
import { baseComponentStateGen } from '../../../../../specs/generators/baseComponentStateGen';
import { NEW_COMPONENT_POSITION_SHIFT_DISTANCE } from './constants';
import { TestBench } from '../../../../../specs/bench/TestBench';
import { BaseComponentInitialPosition } from '../../../components/base/makeBaseComponentInitialState';

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

  it('adds ghost component', () => {
    bench.stub.uuid.returns('123');

    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action, {wsWidth: 1700, margin: {width: 1000}})).toEqual([
      {
        ...comRegistry.getInitialState(ComponentKind.BUTTON),
        position: {
          top: BaseComponentInitialPosition.top,
          left: 350 + BaseComponentInitialPosition.left,
        },
        isGhost: true,
      },
    ]);
  });

  it('converts new ghost component to real one when measured', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '123',
        isGhost: true,
      }),
      state = [com],
      action = newComponentMeasuredAction('123', {
        width: 33,
        height: 55,
      });

    expect(reducer(state, action, {margin: {width: 1000}})).toEqual([
      {
        ...Object.keys(com).reduce((acc, k) => (
          k === 'isGhost'
            ? acc
            : Object.assign(acc, { [k]: com[k] })
        ), {}),
        dimensions: {
          width: 33,
          height: 55,
        },
      },
    ]);
  });

  it('adds new component within workspace margin', () => {
    bench.stub.uuid('1234');

    const
      state = [...ComponentsInitialState],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action, {wsWidth: 1700, margin: {width: 1000}})).toEqual([
      {
        ...comRegistry.getInitialState(ComponentKind.BUTTON),
        position: {
          top: BaseComponentInitialPosition.top,
          left: 350 + BaseComponentInitialPosition.left,
        },
      },
    ]);
  });

  it('adds new component with position shift', () => {
    bench.stub.uuidCycle(2);

    const
      baseCom = baseComponentStateGen(ComponentKind.BUTTON),
      state = [baseCom],
      action = addComponentAction(ComponentKind.BUTTON);

    expect(reducer(state, action, {wsWidth: 1700, margin: {width: 900}})).toEqual([
      comRegistry.getInitialState(ComponentKind.BUTTON),
      {
        ...comRegistry.getInitialState(ComponentKind.BUTTON),
        position: {
          top: baseCom.position.top + NEW_COMPONENT_POSITION_SHIFT_DISTANCE,
          left: 400 + baseCom.position.left + NEW_COMPONENT_POSITION_SHIFT_DISTANCE,
        },
      },
    ]);
  });

  it('selects component on touch', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
      }),
      state = [com],
      action = selectComponentAction('321');

    expect(reducer(state, action, {margin: {width: 1000}})).toEqual([
      {
        ...com,
        isSelected: true,
      }
    ]);
  });

  it('deselects other components when selecting one', () => {
    const
      com1 = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '1',
        isSelected: true,
      }),
      com2 = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '2',
        isSelected: false,
      }),
      state = [com1, com2];

    expect(reducer(state, selectComponentAction('2'), {margin: {width: 1000}})).toEqual([
      {
        ...com1,
        isSelected: false,
      },
      {
        ...com2,
        isSelected: true,
      },
    ]);
  });

  it('deselects component', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '1',
        isSelected: true,
      }),
      state = [com],
      action = deselectComponentAction('1');

    expect(reducer(state, action, {margin: {width: 1000}})).toEqual([
      {
        ...com,
        isSelected: false,
      },
    ]);
  });

  it('moves component', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '111',
        position: {
          top: 50,
          left: 50,
        },
      }),
      state = [com],
      action = moveComponentAction('111', {
        top: 55,
        left: 60,
      });

    expect(reducer(state, action, {margin: {width: 1000}})).toEqual([
      {
        ...com,
        position: {
          top: 55,
          left: 60,
        },
      },
    ]);
  });
});

