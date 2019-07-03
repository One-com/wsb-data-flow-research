/* @flow */

import { PropertiesPanelInitialState } from './propertiesPanelReducer';
import { showPropertiesPanelAction } from '../actions';
import { testReducer } from '../../../../specs/testReducer';
import { propertiesPanelAppSel } from '../selectors';

describe('propertiesPanelReducer', () => {
  let reducer;

  beforeEach(() => {
    reducer = testReducer(propertiesPanelAppSel);
  })

  xit('is shown', () => {
    const
      state = {...PropertiesPanelInitialState},
      action = showPropertiesPanelAction('123', {
        width: 200,
        height: 300,
      });

    expect(reducer(state, action)).toMatchObject({
      width: 200,
      height: 300,
    });
  });
});
