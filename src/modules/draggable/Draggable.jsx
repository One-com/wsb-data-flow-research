/* @flow */

import * as React from 'react';
import type { Position, ReactElementRef } from '../common/commonTypes';
import { getDraggableStyle } from './styles';
import type { DraggableHandler } from './types';

type State = {
  dragStarted: boolean,
  dragStartDelta: Position,
  isDragging: boolean,
  position: Position,
};

type Props = {
  children?: React.Node,
  position?: Position,
  onDragStart?: DraggableHandler,
  onDrag?: DraggableHandler,
  onStillMouseUp?: MouseEventHandler,
  style?: Object,
};

export class Draggable extends React.Component<Props, State> {
  state: State;

  ref: ReactElementRef<'div'>;

  constructor(props: Props) {
    super(props);

    this.state = {
      dragStarted: false,
      dragStartDelta: { top: 0, left: 0 },
      isDragging: false,
      position: props.position || { top: 0, left: 0 },
    };

    this.ref = React.createRef();
  }

  onMouseDown = (e: SyntheticMouseEvent<*>) => {
    const
      // $FlowFixMef
      rect = e.target.getBoundingClientRect(),
      dragStartDelta = {
        top: e.clientY - rect.top,
        left: e.clientX - rect.left,
      };

    this.setState({
      dragStarted: true,
      dragStartDelta,
    });

    if (this.props.onDragStart) {
      // $FlowFixMe
      this.props.onDragStart(this.calculatePosition(e.clientX, e.clientY, dragStartDelta));
    }
  };

  onWindowMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
      {dragStarted, dragStartDelta} = this.state,
      {onDrag, position: propPosition} = this.props;

    if (!dragStarted || !this.ref.current) return;

    this.setState({isDragging: true});

    const position = this.calculatePosition(e.clientX, e.clientY, dragStartDelta);

    if (onDrag) {
      onDrag(position);
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

  onMouseUp = (e: SyntheticMouseEvent<*>) => {
    this.setState({dragStarted: false});

    if (this.props.onStillMouseUp && !this.state.isDragging) {
      // $FlowFixMe
      this.props.onStillMouseUp(e);
    }
  };

  getPosition = () => this.props.position || this.state.position;

  calculatePosition = (clientX: number, clientY: number, dragStartDelta: Position): Position => {
    const
      target = this.ref.current,
      // $FlowFixMe
      parentRect = target.parentNode.getBoundingClientRect(),
      top = clientY - parentRect.top - dragStartDelta.top,
      left = clientX - parentRect.left - dragStartDelta.left;

    return {top, left};
  };

  componentDidMount(): void {
    window.addEventListener('mousemove', this.onWindowMouseMove);
    window.addEventListener('mouseup', this.onWindowMouseUp);
  }

  render() {
    const
      {children, style} = this.props,
      position = this.getPosition();

    return (
      <div
        style={getDraggableStyle({position, style})}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        ref={this.ref}
      >
        {children}
      </div>
    );
  }
}
