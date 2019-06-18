/* @flow */

import * as React from 'react';
import type { Position } from '../common/commonTypes';

const Style = {
  position: 'absolute',
  border: '1px solid gray',
  cursor: 'default',
  userSelect: 'none',
};

type Props = {
  position: Position,
  children: React.Node,
};

export class BaseComponent extends React.Component<Props> {
  render() {
    const { position, children } = this.props;

    return (
      <div
        style={{
          ...Style,
          ...position,
        }}
      >{children}</div>
    );
  }
}
