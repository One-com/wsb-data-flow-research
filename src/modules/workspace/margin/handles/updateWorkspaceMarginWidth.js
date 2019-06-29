/* @flow */

type Params = {
  width: number,
  delta: number,
  wsWidth: number,
};

export const updateWorkspaceMarginWidth = ({width, delta, wsWidth}: Params) => {
  return Math.min(width + delta * 2, wsWidth);
};
