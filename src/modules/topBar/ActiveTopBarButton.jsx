/* @flow */

import * as React from 'react';

const makeActiveTopBarButtonStyle = (
  {
    active,
    style,
    isMutable,
  }: {
    active: boolean,
    style: Object,
    isMutable: boolean,
  },
) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid white',
  justifyContent: 'center',
  cursor: isMutable
    ? (active ? 'pointer' : 'default')
    : 'pointer',
  color: 'white',
  opacity: isMutable
    ? (active ? 1 : '0.33')
    : 1,
  ...style,
});

type Props = {
  children: React.Node,
  active: boolean,
  title?: string,
  style?: Object,
  onClick?: MouseEventHandler,
  isMutable?: boolean,
};

export const ActiveTopBarButton = ({children, active, title, style, onClick, isMutable = true}: Props) => (
  <span
    style={makeActiveTopBarButtonStyle({ active, style, isMutable })}
    title={title}
    onClick={onClick}
  >{children}</span>
);
