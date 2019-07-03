/* @flow */

import { PropertiesPanelInitialState } from './propertiesPanelReducer';
import { showPropertiesPanelAction } from '../actions';
import { testReducer } from '../../../../specs/testReducer';
import { propertiesPanelAppSel } from '../selectors';
import { workspaceComponentsAppSel } from '../../workspace/components/selectors';
import { ComponentKind } from '../../components/ComponentKind';
import { componentsGen } from '../../../../specs/generators/componentsGen';
import { PROPERTIES_PANEL_INITIAL_SPACING } from '../constants';

describe('propertiesPanelReducer', () => {
  let reducer;

  beforeEach(() => {
    reducer = testReducer(propertiesPanelAppSel);
  })

  it('shows component properties panel', () => {
    const
      state = {...PropertiesPanelInitialState},
      action = showPropertiesPanelAction('123', {
        width: 200,
        height: 300,
      }),
      deps = {
        [workspaceComponentsAppSel]: componentsGen([
          {
            kind: ComponentKind.BUTTON,
            id: '123',
            dimensions: {
              width: 70,
              height: 50,
            },
            position: {
              top: 50,
              left: 100,
            },
          },
        ]),
      };

    expect(reducer(state, action, deps)).toMatchObject({
      show: true,
      componentId: '123',
      dimensions: {
        width: 200,
        height: 300,
      },
      position: {
        top: 50,
        left: 170 + PROPERTIES_PANEL_INITIAL_SPACING,
      },
    });
  });
});
