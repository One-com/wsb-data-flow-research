/* @flow */

import { reduxLogger } from '../../dev/reduxLogger';

export const AppMiddlewares = [
  // TODO: apply for dev env only
  reduxLogger(),
];
