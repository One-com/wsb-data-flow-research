/* @flow */

import React from 'react';
import { WorkspaceGuidelines } from './WorkspaceGuidelines';
import { BaseComponent } from '../components/BaseComponent';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

export class Workspace extends React.Component<{}> {
  onMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
        // $FlowFixMe
        rect = e.target.getBoundingClientRect(),
        left = e.clientX - rect.left,
        top = e.clientY - rect.top;

    console.log(`===workspace mouse move: left: ${left} | top: ${top}`);
  }

  render() {
    return (
      <div style={Style} onMouseMove={this.onMouseMove}>
        <BaseComponent position={{ top: 100, left: 50 }}>Base component</BaseComponent>
        <WorkspaceGuidelines width={900} />
      </div>
    )
  }
}
