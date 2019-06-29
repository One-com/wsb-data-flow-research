/* @flow */

import { calculateWorkspaceMarginHandlePosition } from '../functions/calculateWorkspaceMarginHandlePosition';

type Params = {
  width: number,
  wsWidth: number,
  isLocked: boolean,
  left?: boolean,
  right?: boolean,
};

export const getWorkspaceMarginHandleStyles = ({width, wsWidth, isLocked, left, right}: Params): Object => {
  const position = calculateWorkspaceMarginHandlePosition(width, wsWidth);
  
  return {
    position: 'absolute',
    width: 1,
    height: '100%',
    ...(left ? {left: position} : null),
    ...(right ? {right: position} : null),
    zIndex: 10,
    cursor: isLocked ? 'default' : 'ew-resize',
    backgroundColor: '#00E4FF',
  };
};
