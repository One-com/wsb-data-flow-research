/* @flow */

import * as React from 'react';
import type { BaseComponentProps } from './types';
import { getBaseComponentStyle } from './styles';
import { connectComponent } from '../../common/connectComponent';
import { selectComponentAction } from '../../workspace/components/actions';

class BaseComponentClass extends React.Component<BaseComponentProps> {
  onClick = () => this.props.dispatch(selectComponentAction(this.props.state.id));

  render() {
    const { state: { position, selected }, children } = this.props;

    return (
      <div
        style={{
          ...getBaseComponentStyle({selected}),
          ...position,
        }}
        onClick={this.onClick}
      >{children}</div>
    );
  }
}

// $FlowFixMe: TODO: fix babel doesn't understand <> empty generic
export const BaseComponent = connectComponent(BaseComponentClass);
