/* @flow */

import {assocPath as rAssocPath} from 'ramda';
import {combineReducers} from '@sepo27/redux-di';
import { componentsReducer } from '../../components/reducer/componentsReducer';
import { workspaceMarginReducer } from '../../margin/main/reducer/workspaceMarginReducer';
import { workspaceWidthReducer } from '../../width/workspaceWidthReducer';
import { workspaceStatusReducer } from '../../status/workspaceStatusReducer';
import type { WorkspaceState } from '../types';
import { MOVE_COMPONENT_ACTION } from '../../components/actions';
import { Lit } from '../../../common/Lit';
import { moveComponentInWorkspace } from '../functions/moveComponentInWorkspace';

const workspaceReducerFn = combineReducers({
  components: componentsReducer,
  margin: workspaceMarginReducer,
  width: workspaceWidthReducer,
  status: workspaceStatusReducer,
});

export const workspaceReducer = (state: WorkspaceState, action: Object) => {
  let nextState = workspaceReducerFn(state, action);

  if (action.type === MOVE_COMPONENT_ACTION) {
    const
      { id: componentId, position } = action.payload,
      { components: nextComponents, marginWidth: nextMarginWidth } = moveComponentInWorkspace({
        componentId,
        position,
        components: nextState.components,
        workspace: {
          width: nextState.width,
          margin: nextState.margin,
        },
      });

    // $FlowFixMe
    nextState = rAssocPath([Lit.components], nextComponents, nextState);
    // $FlowFixMe
    nextState = rAssocPath([Lit.margin, Lit.width], nextMarginWidth, nextState);
  }

  return nextState;
};
