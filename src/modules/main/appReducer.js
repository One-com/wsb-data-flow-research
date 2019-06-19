/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import { workspaceReducer } from '../workspace/main/reducer/workspaceReducer';

export const appReducer = combineReducers({
  workspace: workspaceReducer,
}, {
  isRoot: true,
});
