/* @flow */

import type { Dimensions } from '../common/commonTypes';
import type {Position} from '../common/commonTypes';

export type PropertiesPanelState = {|
  show: boolean,
  componentId: string,
  dimensions: Dimensions,
  position: Position,
|};
