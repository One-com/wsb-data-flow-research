/* @flow */

import type {Position} from '../../common/commonTypes';

export const
  TOUCH_WORKSPACE_ACTION = 'TOUCH_WORKSPACE_ACTION',
  touchWorkspaceAction= (position: Position) => ({
    type: TOUCH_WORKSPACE_ACTION,
    payload: position,
  });

export const
  RELEASE_WORKSPACE_ACTION = 'RELEASE_WORKSPACE_ACTION',
  releaseWorkspaceAction = (position: Position) => ({
    type: RELEASE_WORKSPACE_ACTION,
    payload: position,
  });

export const
  MOVE_OVER_WORKSPACE_ACTION = 'MOVE_OVER_WORKSPACE_ACTION',
  moveOverWorkspaceAction = (position: Position) => ({
    type: MOVE_OVER_WORKSPACE_ACTION,
    payload: position,
  });
