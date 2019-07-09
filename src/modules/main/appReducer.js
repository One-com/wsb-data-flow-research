/* @flow */

import {equals as rEquals} from 'ramda';
import {combineReducers} from '@sepo27/redux-di';
import type {Reducer} from 'redux';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';
import type { AppState } from './types';
import { FETCH_APP_STATE_SUCCESS_ACTION, PUT_APP_STATE_SUCCESS_ACTION } from '../save/main/actions';

const appReducerCombined = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
}, {
  isRoot: true,
});

// $FlowFixMe
export const appReducer: Reducer<AppState, *> = (state: AppState, action: Object) => {
  if (action.type === FETCH_APP_STATE_SUCCESS_ACTION && action.response) {
    return action.response;
  }

  let nextState = appReducerCombined(state, action);

  // TODO: this should be just strict equality check ! (seems like redux-di mutates the state is no changes..)
  // TODO: this should obviously be refactored ...
  // if (
  //   action.type !== PUT_APP_STATE_SUCCESS_ACTION
  //   && action.type !== SET_WORKSPACE_WIDTH_ACTION
  //   && state
  //   && Object.keys(state).length
  //   && !rEquals(state, nextState)
  // ) {
  //   nextState[Lit.saveStatus] = SaveStatus.UNSAVED;
  // }

  return nextState;
};
