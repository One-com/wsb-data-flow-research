/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import type {Reducer} from 'redux';
import { Lit } from '../common/Lit';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';
import type { AppState } from './types';
import { SET_STORAGE_DATA_ACTION } from '../storage/actions';
import { saveStatusReducer } from '../save/status/saveStatusReducer';

const appReducerCombined = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
  [Lit.saveStatus]: saveStatusReducer,
}, {
  isRoot: true,
});

// $FlowFixMe
export const appReducer: Reducer<AppState, *> = (state: AppState, action: Object) => (
  action.type === SET_STORAGE_DATA_ACTION
    ? action.payload
    : appReducerCombined(state, action)
);
