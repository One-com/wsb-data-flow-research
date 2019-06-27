/* @flow */

import { createLogger } from 'redux-logger';

const ExcludeActions = [
];

export const reduxLogger = () => createLogger({
  predicate: (_, action) => ExcludeActions.indexOf(action.type) === -1,
});
