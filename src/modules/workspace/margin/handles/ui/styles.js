/* @flow */

type Params = {
  isMarginWidthLocked: boolean,
  left?: boolean,
  right?: boolean,
};

export const getMarginWidthHandleStyle = ({isMarginWidthLocked, left, right}: Params) => ({
  position: 'absolute',
  width: 1,
  height: '100%',
  ...(left ? {left: 0} : null),
  ...(right ? {right: 0} : null),
  zIndex: 10,
  cursor: isMarginWidthLocked ? 'default' : 'ew-resize',
  backgroundColor: '#00E4FF',
});
