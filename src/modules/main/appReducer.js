/* @flow */

import {equals as rEquals} from 'ramda';
import {combineReducers} from '@sepo27/redux-di';
import type {Reducer} from 'redux';
import { Lit } from '../common/Lit';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';
import type { AppState } from './types';
import { SET_STORAGE_DATA_ACTION } from '../storage/actions';
import { saveStatusReducer } from '../save/status/saveStatusReducer';
import { SaveStatus } from '../save/constants';

const appReducerCombined = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
  [Lit.saveStatus]: saveStatusReducer,
}, {
  isRoot: true,
});

// $FlowFixMe
export const appReducer: Reducer<AppState, *> = (state: AppState, action: Object) => {
  if (action.type === SET_STORAGE_DATA_ACTION) {
    return action.payload;
  }
  
  let nextState = appReducerCombined(state, action);
  
  // TODO: this should be just strict equality check ! (seems like redux-di mutates the state is no changes..)
  if (state && Object.keys(state).length && !rEquals(state, nextState)) {
    nextState[Lit.saveStatus] = SaveStatus.UNSAVED;
  }
  
  return nextState;
};
