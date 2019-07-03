/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';
import { propertiesPanelReducer } from '../propertiesPanel/reducer/propertiesPanelReducer';

export const appReducer = combineReducers({
  workspace: workspaceReducer,
  propertiesPanel: propertiesPanelReducer,
}, {
  isRoot: true,
});
