/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import { componentsReducer } from '../../components/reducer/componentsReducer';
import { workspaceModeReducer } from '../../mode/reducer/workspaceModeReducer';

export const workspaceReducer = combineReducers({
  components: componentsReducer,
  mode: workspaceModeReducer,
});
