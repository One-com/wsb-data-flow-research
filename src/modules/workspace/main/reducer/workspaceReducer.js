/* @flow */

import {combineReducers} from '@sepo27/redux-di';
import { componentsReducer } from '../../components/reducer/componentsReducer';
import { workspaceMarginReducer } from '../../margin/reducer/workspaceMarginReducer';
import { workspaceWidthReducer } from '../../width/workspaceWidthReducer';

export const workspaceReducer = combineReducers({
  components: componentsReducer,
  margin: workspaceMarginReducer,
  width: workspaceWidthReducer,
});
