/* @flow */

import { MIN_WORKSPACE_MARGIN_WIDTH } from '../main/constants';

type Params = {
  width: number,
  delta: number,
  wsWidth: number,
};

export const updateWorkspaceMarginWidth = ({width, delta, wsWidth}: Params) =>
  Math.max(
    Math.min(width + delta * 2, wsWidth),
    MIN_WORKSPACE_MARGIN_WIDTH,
  );
