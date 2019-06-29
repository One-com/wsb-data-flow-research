/* @flow */

import type { SelectorPath } from '../../lib/functions/pathSelector';
import type { AppSel } from '../main/types';
import { pathSelector } from '../../lib/functions/pathSelector';

export const appSel = (path: SelectorPath): AppSel<*> => {
  const selector = pathSelector(path);
  // $FlowFixMe: TODO
  selector._path = path;
  return selector;
};
