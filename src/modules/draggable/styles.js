/* @flow */

import type {Position} from '../common/commonTypes';

type Params = {
  position: Position,
};

export const getDraggableStyle = ({position}: Params) => ({
  position: 'absolute',
  ...position,
});
