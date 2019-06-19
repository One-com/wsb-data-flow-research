/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import { WorkspaceGuidelines } from './WorkspaceGuidelines';
import type { AppState } from '../../../main/types';
import { workspaceAppSel } from '../selectors';
import type { WorkspaceState } from '../types';
import { WorkspaceComponents } from './WorkspaceComponents';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

type Props = {
  state: WorkspaceState;
};

export class WorkspaceCom extends React.Component<Props> {
  onMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
        // $FlowFixMe
        rect = e.target.getBoundingClientRect(),
        left = e.clientX - rect.left,
        top = e.clientY - rect.top;

    console.log(`===workspace mouse move: left: ${left} | top: ${top}`);
  }

  render() {
    const { state: { components } } = this.props;

    return (
      <div style={Style}>
        <WorkspaceComponents components={components} />
        <WorkspaceGuidelines width={900} />
      </div>
    )
  }
}

const mapStateToProps: any = (appState: AppState) => ({
  state: workspaceAppSel(appState),
});

// $FlowFixMe: TODO
export const Workspace = connect(mapStateToProps)(WorkspaceCom);
