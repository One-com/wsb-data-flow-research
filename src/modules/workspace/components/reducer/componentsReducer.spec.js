/* @flow */

import {
  ComponentsInitialState,
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
import { testReducer } from '../../../../../specs/testReducer';
import { workspaceComponentsAppSel } from '../selectors';
import { workspaceWidthAppSel } from '../../width/selectors';
import { workspaceMarginAppSel } from '../../margin/main/selectors';
import { workspaceMarginWidthAppSel } from '../../margin/width/selectors';

const reducer = testReducer(workspaceComponentsAppSel);

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
      action = addComponentAction(ComponentKind.BUTTON),
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginAppSel()]: {
          width: 1000,
        },
      };

    expect(reducer(state, action, deps)).toEqual([
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
      action = addComponentAction(ComponentKind.BUTTON),
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginWidthAppSel]: 1000,
      };

    expect(reducer(state, action, deps)).toEqual([
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
      action = addComponentAction(ComponentKind.BUTTON),
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginWidthAppSel]: 900,
      };

    expect(reducer(state, action, deps)).toEqual([
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
      action = selectComponentAction('321'),
      deps = {
        [workspaceMarginWidthAppSel]: 1000,
      };

    expect(reducer(state, action, deps)).toEqual([
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
      state = [com1, com2],
      deps = {
        [workspaceMarginWidthAppSel]: 1000,
      };

    expect(reducer(state, selectComponentAction('2'), deps)).toEqual([
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
      action = deselectComponentAction('1'),
      deps = {
        [workspaceMarginWidthAppSel]: 1000,
      };

    expect(reducer(state, action, deps)).toEqual([
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
          top: 250,
          left: 250,
        },
      }),
      state = [com],
      action = moveComponentAction('111', {
        top: 255,
        left: 260,
      }),
      deps = {
        [workspaceWidthAppSel]: 1100,
        [workspaceMarginAppSel()]: {
          isLocked: false,
          width: 1000,
        },
      };

    expect(reducer(state, action, deps)).toEqual([
      {
        ...com,
        position: {
          top: 255,
          left: 260,
        },
      },
    ]);
  });

  it('stops moving component at margin left edge when is locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
        position: {
          top: 50,
          left: 400,
        },
      }),
      state = [com],
      action = moveComponentAction('321', {
        top: 55,
        left: 300,
      }),
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginAppSel()]: {
          isLocked: true,
          width: 1000,
        },
      };

    expect(reducer(state, action, deps)).toEqual([
      {
        ...com,
        position: {
          top: 55,
          left: 350,
        },
      },
    ]);
  });

  it('stops moving component at margin right edge when is locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '3',
        position: {
          top: 50,
          left: 400,
        },
        dimensions: {
          width: 70,
          height: 40,
        },
      }),
      state = [com],
      action = moveComponentAction('3', {
        top: 60,
        left: 1400,
      }),
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginAppSel()]: {
          isLocked: true,
          width: 1000,
        },
      };

    expect(reducer(state, action, deps)).toEqual([
      {
        ...com,
        position: {
          top: 60,
          left: 1280,
        },
      },
    ]);
  });

  it('stops moving component at workspace left edge when margin is not locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
        position: {
          top: 50,
          left: 400,
        },
      }),
      state = [com],
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginAppSel()]: {
          isLocked: false,
          width: 1000,
        },
      },
      action = moveComponentAction('321', {
        top: 65,
        left: -15,
      });

    expect(reducer(state, action, deps)).toEqual([
      {
        ...com,
        position: {
          top: 65,
          left: 0,
        },
      },
    ]);
  });

  it('stops moving component at workspace right edge when margin is not locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '3',
        position: {
          top: 50,
          left: 400,
        },
        dimensions: {
          width: 50,
          height: 40,
        },
      }),
      state = [com],
      deps = {
        [workspaceWidthAppSel]: 1700,
        [workspaceMarginAppSel()]: {
          isLocked: false,
          width: 1000,
        },
      },
      action = moveComponentAction('3', {
        top: 63,
        left: 1700,
      });

    expect(reducer(state, action, deps)).toEqual([
      {
        ...com,
        position: {
          top: 63,
          left: 1650,
        },
      },
    ]);
  });
});

