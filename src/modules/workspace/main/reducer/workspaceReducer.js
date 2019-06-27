/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import { componentsReducer } from '../../components/reducer/componentsReducer';
import { workspaceMarginReducer } from '../../margin/reducer/workspaceMarginReducer';

export const workspaceReducer = combineReducers({
  components: componentsReducer,
  margin: workspaceMarginReducer,
});
