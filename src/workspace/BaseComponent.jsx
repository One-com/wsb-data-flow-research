/* @flow */

import * as React from 'react';

const Style = {
  position: 'absolute',
  border: '1px solid gray',
  padding: '20px', // TODO: remove
};

type Props = {
  children: React.Node,
};

export class BaseComponent extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <div style={Style}>{children}</div>
    );
  }
}
