/* @flow */

import {assocPath as rAssocPath} from 'ramda';
import { baseComponentStateGen } from '../../../../../specs/generators/baseComponentStateGen';
import { ComponentKind } from '../../../components/ComponentKind';
import { moveComponentAction } from '../../components/actions';
import {workspaceReducer as reducer} from './workspaceReducer';
import type { WorkspaceState } from '../types';
import { dummyTestAction } from '../../../../../specs/actions';
import { Lit } from '../../../common/Lit';

describe('workspaceReducer', () => {
  let WorkspaceInitialState: WorkspaceState;

  beforeEach(() => {
    WorkspaceInitialState = reducer(undefined, dummyTestAction());
  })

  it('moves margin by left edge along with components when not locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
        position: {
          top: 70,
          left: 400,
        },
      }),
      deps = {
        wsWidth: 1700,
        margin: {isLocked: true, width: 1000},
      },
      action = moveComponentAction('321', {
        top: 67,
        left: 320,
      });

    let state = rAssocPath([Lit.width], 1700, WorkspaceInitialState);
    state = rAssocPath([Lit.margin, Lit.isLocked], false, state);
    state = rAssocPath([Lit.margin, Lit.width], 1000, state);
    state = rAssocPath([Lit.components], [com], state);

    expect(reducer(state, action, deps)).toEqual({
      ...WorkspaceInitialState,
      components: [
        {
          ...com,
          position: {
            top: 67,
            left: 320,
          },
        },
      ],
      width: 1700,
      margin: {
        ...WorkspaceInitialState.margin,
        width: 1060,
      },
    });
  });

  it('does not move margin by left edge when component is moved inside margin', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
        position: {
          top: 70,
          left: 400,
        },
      }),
      deps = {
        wsWidth: 1700,
        margin: {isLocked: true, width: 1000},
      },
      action = moveComponentAction('321', {
        top: 67,
        left: 420,
      });

    let state = rAssocPath([Lit.width], 1700, WorkspaceInitialState);
    state = rAssocPath([Lit.margin, Lit.isLocked], false, state);
    state = rAssocPath([Lit.margin, Lit.width], 1000, state);
    state = rAssocPath([Lit.components], [com], state);

    expect(reducer(state, action, deps)).toEqual({
      ...WorkspaceInitialState,
      components: [
        {
          ...com,
          position: {
            top: 67,
            left: 420,
          },
        },
      ],
      width: 1700,
      margin: {
        ...WorkspaceInitialState.margin,
        width: 1000,
      },
    });
  });

  it('moves margin by right edge along with components when not locked', () => {
    const
      com = baseComponentStateGen(ComponentKind.BUTTON, {
        id: '321',
        position: {
          top: 70,
          left: 1200,
        },
        dimensions: {
          height: 40,
          width: 50,
        },
      }),
      deps = {
        wsWidth: 1700,
        margin: {isLocked: true, width: 1000},
      },
      action = moveComponentAction('321', {
        top: 77,
        left: 1400,
      });

    let state = rAssocPath([Lit.width], 1700, WorkspaceInitialState);
    state = rAssocPath([Lit.margin, Lit.isLocked], false, state);
    state = rAssocPath([Lit.margin, Lit.width], 1000, state);
    state = rAssocPath([Lit.components], [com], state);

    expect(reducer(state, action, deps)).toEqual({
      ...WorkspaceInitialState,
      components: [
        {
          ...com,
          position: {
            top: 77,
            left: 1400,
          },
        },
      ],
      width: 1700,
      margin: {
        ...WorkspaceInitialState.margin,
        width: 1200,
      },
    });
  });
});
