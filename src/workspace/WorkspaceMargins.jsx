/* @flow */

import React from 'react';

const BORDER_STYLE = '1px solid #00E4FF';

const Style = {
  position: 'absolute',
  height: '100%',
  borderLeft: BORDER_STYLE,
  borderRight: BORDER_STYLE,
};

type Props = {
  width: number,
};

export const WorkspaceMargins = ({ width }: Props) => (
  <div
    style={{
      ...Style,
      width,
    }}
  />
);
