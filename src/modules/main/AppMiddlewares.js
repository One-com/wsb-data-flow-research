/* @flow */

import { reduxLogger } from '../../dev/reduxLogger';
import { isNonTestEnv } from '../env/isEnv';

const AppMiddlewares = [];

// TODO: this should be configurable and custom log implementation for test run
if (isNonTestEnv()) {
  AppMiddlewares.push(reduxLogger());
}

export { AppMiddlewares };
