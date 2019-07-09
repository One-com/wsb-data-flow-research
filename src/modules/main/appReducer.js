/* @flow */

import {equals as rEquals} from 'ramda';
import {combineReducers} from '@sepo27/redux-di';
import type {Reducer} from 'redux';
import { Lit } from '../common/Lit';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';
import type { AppState } from './types';
import { APP_STATE_SAVED_TO_STORAGE_ACTION, SET_APP_STATE_FROM_STORAGE_ACTION } from '../storage/actions';
import { saveStatusReducer } from '../save_deprecated/status/saveStatusReducer';
import { SaveStatus } from '../save_deprecated/constants';
import { SET_WORKSPACE_WIDTH_ACTION } from '../workspace/width/actions';

const appReducerCombined = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
  [Lit.saveStatus]: saveStatusReducer,
}, {
  isRoot: true,
});

// $FlowFixMe
export const appReducer: Reducer<AppState, *> = (state: AppState, action: Object) => {
  if (action.type === SET_APP_STATE_FROM_STORAGE_ACTION) {
    return action.payload;
  }

  let nextState = appReducerCombined(state, action);

  // TODO: this should be just strict equality check ! (seems like redux-di mutates the state is no changes..)
  // TODO: this should obviously be refactored ...
  if (
    action.type !== APP_STATE_SAVED_TO_STORAGE_ACTION
    && action.type !== SET_WORKSPACE_WIDTH_ACTION
    && state
    && Object.keys(state).length
    && !rEquals(state, nextState)
  ) {
    nextState[Lit.saveStatus] = SaveStatus.UNSAVED;
  }

  return nextState;
};
