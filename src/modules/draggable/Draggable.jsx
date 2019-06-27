/* @flow */

import * as React from 'react';
import type { Position, ReactElementRef } from '../common/commonTypes';
import { getDraggableStyle } from './styles';
import type { DraggableHandler } from './types';

type State = {
  isDragging: boolean,
  dragStartDelta: Position,
  position: Position,
};

type Props = {
  children: React.Node,
  position?: Position,
  onDrag?: DraggableHandler,
};

export class Draggable extends React.Component<Props, State> {
  state: State;

  ref: ReactElementRef<'div'>;

  constructor(props: Props) {
    super(props);

    this.state = {
      isDragging: false,
      dragStartDelta: { top: 0, left: 0 },
      position: props.position || { top: 0, left: 0 },
      propPosition: null,
    };

    this.ref = React.createRef();
  }

  onMouseDown = (e: SyntheticMouseEvent<*>) => {
    // $FlowFixMe
    const rect = e.target.getBoundingClientRect();

    this.setState({
      isDragging: true,
      dragStartDelta: {
        top: e.clientY - rect.top,
        left: e.clientX - rect.left,
      },
    })
  };

  onWindowMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
      {isDragging, dragStartDelta} = this.state,
      {onDrag, position: propPosition} = this.props;

    if (!isDragging || !this.ref.current) return;

    const
      target = this.ref.current,
      // $FlowFixMe
      parentRect = target.parentNode.getBoundingClientRect(),
      top = e.clientY - parentRect.top - dragStartDelta.top,
      left = e.clientX - parentRect.left - dragStartDelta.left,
      position = {top, left};

    if (onDrag) {
      onDrag(position, e);
    }

    if (!propPosition) {
      this.setState({position});
    }
  };

  onWindowMouseUp = () => {
    if (this.state.isDragging) {
      this.setState({isDragging: false});
    }
  };

  getPosition = () => this.props.position || this.state.position;

  componentDidMount(): void {
    window.addEventListener('mousemove', this.onWindowMouseMove);
    window.addEventListener('mouseup', this.onWindowMouseUp);
  }

  render() {
    const
      {children} = this.props,
      position = this.getPosition();

    return (
      <div
        style={getDraggableStyle({position})}
        onMouseDown={this.onMouseDown}
        ref={this.ref}
      >
        {children}
      </div>
    );
  }
}
