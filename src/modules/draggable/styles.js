/* @flow */

import type {Position} from '../common/commonTypes';

type Params = {
  position: Position,
  style?: Object,
};

export const getDraggableStyle = ({position, style}: Params) => ({
  ...style,
  ...position,
  position: 'absolute',
});
