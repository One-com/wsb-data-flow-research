/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import { WorkspaceGuidelines } from './WorkspaceGuidelines';
import type { AppState } from '../../../main/types';
import { workspaceAppSel } from '../selectors';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

export class WorkspaceCom extends React.Component<{}> {
  onMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
        // $FlowFixMe
        rect = e.target.getBoundingClientRect(),
        left = e.clientX - rect.left,
        top = e.clientY - rect.top;

    console.log(`===workspace mouse move: left: ${left} | top: ${top}`);
  }

  render() {
    console.log('===Workspace', this.props)

    return (
      <div style={Style} onMouseMove={this.onMouseMove}>
        <WorkspaceGuidelines width={900} />
      </div>
    )
  }
}

const mapStateToProps: any = (appState: AppState) => ({
  workspace: workspaceAppSel(appState),
});

// $FlowFixMe: TODO
export const Workspace = connect(mapStateToProps)(WorkspaceCom);
