/* @flow */

import * as React from 'react';

const makeActiveTopBarButtonStyle = (
  {
    active,
    style,
  }: {
    active: boolean,
    style: Object,
  },
) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid white',
  justifyContent: 'center',
  cursor: active ? 'pointer' : 'default',
  color: 'white',
  opacity: active ? 1 : '0.33',
  ...style,
});

type Props = {
  children: React.Node,
  active: boolean,
  title?: string,
  style?: Object,
  onClick?: MouseEventHandler,
};

export const ActiveTopBarButton = ({children, active, title, style, onClick}: Props) => (
  <span
    style={makeActiveTopBarButtonStyle({ active, style })}
    title={title}
    onClick={onClick}
  >{children}</span>
);
