/* @flow */

import {assocPath as rAssocPath} from 'ramda';
import {combineReducers} from '@sepo27/redux-di';
import { componentsReducer } from '../../components/reducer/componentsReducer';
import { workspaceMarginReducer } from '../../margin/main/reducer/workspaceMarginReducer';
import { workspaceWidthReducer } from '../../width/workspaceWidthReducer';
import { workspaceStatusReducer } from '../../status/workspaceStatusReducer';
import type { WorkspaceState } from '../types';
import { MOVE_COMPONENT_ACTION } from '../../components/actions';
import { pathSelector } from '../../../../lib/functions/pathSelector';
import { Lit } from '../../../common/Lit';

const workspaceReducerFn = combineReducers({
  components: componentsReducer,
  margin: workspaceMarginReducer,
  width: workspaceWidthReducer,
  status: workspaceStatusReducer,
});

export const workspaceReducer = (state: WorkspaceState, action: Object) => {
  let nextState = workspaceReducerFn(state, action);

  if (action.type === MOVE_COMPONENT_ACTION) {
    const isMarginLocked = nextState.margin.isLocked;
    if (!isMarginLocked) {
      const
        wsWidth = nextState.width,
        components = nextState.components,
        minMargin = components.reduce(
          (acc, com) => {
            const
              {position: {left: comLeft}, dimensions: {width}} = com,
              comRight = comLeft + width;

            return Math.min(comLeft, wsWidth - comRight);
          },
          wsWidth,
        ),
        nextMarginWidth = wsWidth - 2 * minMargin;

      // $FlowFixMe: TODO
      nextState = rAssocPath([Lit.margin, Lit.width], nextMarginWidth, nextState);
    }
  }

  return nextState;
};
