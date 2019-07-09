/* @flow */

import { reduxLogger } from '../../dev/reduxLogger';
import { isNonTestEnv } from '../../env/isEnv';
import { saveMiddleware } from '../save/main/saveMiddleware';
import { serviceHandlerMiddleware } from '../serviceHandler/serviceHandlerMiddleware';

const AppMiddlewares = [
  saveMiddleware,
  serviceHandlerMiddleware,
];

// TODO: this should be configurable and custom log implementation for test run
if (isNonTestEnv()) {
  AppMiddlewares.push(reduxLogger());
}

export { AppMiddlewares };
