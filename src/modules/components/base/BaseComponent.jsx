/* @flow */

import * as React from 'react';
import type { BaseComponentProps } from './types';
import { getBaseComponentStyle } from './styles';
import { connectComponent } from '../../common/connectComponent';
import { newComponentMeasuredAction, selectComponentAction } from '../../workspace/components/actions';
import type { ReactElementRef } from '../../common/commonTypes';

class BaseComponentClass extends React.Component<BaseComponentProps> {
  containerRef: ReactElementRef<'div'>;

  constructor() {
    super();
    this.containerRef = React.createRef();
  }

  onClick = () => this.props.dispatch(selectComponentAction(this.props.state.id));

  componentDidMount() {
    const { state: { isGhost, id }, dispatch } = this.props;
    if (isGhost && this.containerRef.current) {
      const { width, height } = this.containerRef.current.getBoundingClientRect();
      dispatch(newComponentMeasuredAction(id, {
        width: Math.round(width),
        height: Math.round(height),
      }));
    }
  }

  render() {
    const { state: { position, isGhost, isSelected }, children } = this.props;

    return (
      <div
        style={{
          ...getBaseComponentStyle({isGhost, isSelected}),
          ...position,
        }}
        onClick={this.onClick}
        ref={this.containerRef}
      >{children}</div>
    );
  }
}

// $FlowFixMe: TODO: fix babel doesn't understand <> empty generic
export const BaseComponent = connectComponent(BaseComponentClass);
