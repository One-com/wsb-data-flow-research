/* @flow */

import {path as rPath} from 'ramda';

export type SelectorPath = Array<string | number>;

// $FlowFixMe: TODO
export const pathSelector = (path: SelectorPath) => rPath(path);
