/* @flow */

import type {Position} from '../../../../common/commonTypes';

type Params = {
  isLocked: boolean,
  position?: Position,
};

export const getWorkspaceMarginHandleStyle = ({isLocked, position}: Params): Object => ({
  ...position,
  position: 'absolute',
  width: 1,
  height: '100%',
  zIndex: 10,
  cursor: isLocked ? 'default' : 'ew-resize',
  backgroundColor: '#00E4FF',
});
