/* @flow */

import * as React from 'react';
import type { BaseComponentProps } from './types';

const Style = {
  position: 'absolute',
  border: '1px solid gray',
  cursor: 'default',
  userSelect: 'none',
};

export class BaseComponent extends React.Component<BaseComponentProps> {
  render() {
    const { state: { position }, children } = this.props;

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
