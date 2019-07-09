/* @flow */

import { combineReducers } from '@sepo27/redux-di';
import type {Reducer} from 'redux';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';
import type { AppState } from './types';
import { FETCH_APP_STATE_SUCCESS_ACTION } from '../save/main/actions';
import { Lit } from '../common/Lit';
import { saveStatusReducer } from '../save/status/saveStatusReducer';
import { SaveStatus } from '../save/status/constants';

const appReducerCombined = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
}, {
  isRoot: true,
});

// $FlowFixMe
export const appReducer: Reducer<AppState, *> = (state: AppState, action: Object) => {
  let nextState = state;
  
  if (action.type === FETCH_APP_STATE_SUCCESS_ACTION && action.response) {
    nextState = {
      ...action.response,
      [Lit.saveStatus]: SaveStatus.SAVED,
    };
    // nextState = deepMerge(nextState, action.payload) // TODO: deepMerge seems to be buggy ...
  }

  nextState = appReducerCombined(nextState, action);

  // TODO: extend redux-di to handle prev / next deps and access app state
  const saveStatusState = state === undefined ? undefined : state[Lit.saveStatus];
  nextState[Lit.saveStatus] = saveStatusReducer(saveStatusState, action, {
    prevAppState: state,
    nextAppState: nextState,
  });

  return nextState;
};
