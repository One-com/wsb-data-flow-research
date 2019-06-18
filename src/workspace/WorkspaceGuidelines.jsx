/* @flow */

import React from 'react';

const BORDER_STYLE = '1px solid #00E4FF';

const Style = {
  position: 'absolute',
  height: '100%',
  borderLeft: BORDER_STYLE,
  borderRight: BORDER_STYLE,
  left: 0,
  right: 0,
  margin: '0 auto',
};

type Props = {
  width: number,
};

export const WorkspaceGuidelines = ({ width }: Props) => (
  <div
    style={{
      ...Style,
      width,
    }}
  />
);
