/* @flow */

import * as React from 'react';
import { FlexCenterStyle } from '../common/commonStyles';

const Style = {
  ...FlexCenterStyle,
  width: '80%',
  height: '30px',
  cursor: 'pointer',
  border: '1px solid gray',
  marginTop: '15px',
  backgroundColor: '#ddd',
  userSelect: 'none',
};

type Props = {
  children: string,
  onClick: MouseEventHandler,
};

export const PanelComponent = ({ children, onClick }: Props) => (
  <div style={Style} onClick={onClick}>{children}</div>
);
