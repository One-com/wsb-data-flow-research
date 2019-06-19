/* @flow */

import * as React from 'react';
import type { BaseComponentProps } from './types';
import { getBaseComponentStyle } from './styles';
import { connectComponent } from '../../common/connectComponent';
import {
  releaseComponentAction,
  touchComponentAction,
} from '../../workspace/components/actions';

class BaseComponentClass extends React.Component<BaseComponentProps> {
  onMouseDown = () => this.props.dispatch(touchComponentAction(this.props.state.id));

  onMouseUp = () => this.props.dispatch(releaseComponentAction(this.props.state.id));

  render() {
    const { state: { position, isSelected }, children } = this.props;

    return (
      <div
        style={{
          ...getBaseComponentStyle({isSelected}),
          ...position,
        }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >{children}</div>
    );
  }
}

// $FlowFixMe: TODO: fix babel doesn't understand <> empty generic
export const BaseComponent = connectComponent(BaseComponentClass);
