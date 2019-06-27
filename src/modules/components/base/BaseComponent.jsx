/* @flow */

import * as React from 'react';
import type { BaseComponentProps } from './types';
import { getBaseComponentStyle } from './styles';
import { connectComponent } from '../../common/connectComponent';
import {
  deselectComponentAction,
  moveComponentAction,
  newComponentMeasuredAction,
  selectComponentAction,
} from '../../workspace/components/actions';
import type { ReactElementRef } from '../../common/commonTypes';
import { Draggable } from '../../draggable/Draggable';
import type { DraggableHandler } from '../../draggable/types';

class BaseComponentClass extends React.Component<BaseComponentProps> {
  containerRef: ReactElementRef<'div'>;

  constructor() {
    super();
    this.containerRef = React.createRef();
  }

  onStillMouseUp = () => this.props.dispatch(selectComponentAction(this.props.state.id));

  onDrag: DraggableHandler = position => this.props.dispatch(
    moveComponentAction(this.props.state.id, position),
  );

  onWindowMouseDown = (e: SyntheticMouseEvent<*>) => {
    e.stopPropagation();
    this.props.dispatch(deselectComponentAction(this.props.state.id));
  };

  componentDidMount() {
    const { state: { isGhost, id }, dispatch } = this.props;
    if (isGhost && this.containerRef.current) {
      const { width, height } = this.containerRef.current.getBoundingClientRect();
      dispatch(newComponentMeasuredAction(id, {
        width: Math.round(width),
        height: Math.round(height),
      }));
    }

    window.addEventListener('mousedown', this.onWindowMouseDown);
  }

  render() {
    const { state: { position, isGhost, isSelected }, children } = this.props;

    return (
      <Draggable
        position={position}
        onDrag={this.onDrag}
        onStillMouseUp={this.onStillMouseUp}
      >
        <div
          style={getBaseComponentStyle({isGhost, isSelected})}
          ref={this.containerRef}
        >{children}</div>
      </Draggable>
    );
  }
}

// $FlowFixMe: TODO: fix babel doesn't understand <> empty generic
export const BaseComponent = connectComponent(BaseComponentClass);
