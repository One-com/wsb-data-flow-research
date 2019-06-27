/* @flow */

import type {Position} from '../../common/commonTypes';

export const
  MOVE_OVER_WORKSPACE_ACTION = 'MOVE_OVER_WORKSPACE_ACTION',
  moveOverWorkspaceAction = (position: Position) => ({
    type: MOVE_OVER_WORKSPACE_ACTION,
    payload: position,
  });
