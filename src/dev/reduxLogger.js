/* @flow */

import { createLogger } from 'redux-logger';
import { MOVE_OVER_WORKSPACE_ACTION } from '../modules/workspace/main/actions';

const ExcludeActions = [
  MOVE_OVER_WORKSPACE_ACTION,
];

export const reduxLogger = () => createLogger({
  predicate: (_, action) => ExcludeActions.indexOf(action.type) === -1,
});
