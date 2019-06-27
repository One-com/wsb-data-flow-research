/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import { WorkspaceMargin } from '../../margin/ui/WorkspaceMargin';
import type { AppDispatch, AppState } from '../../../main/types';
import { workspaceAppSel } from '../selectors';
import type { WorkspaceState } from '../types';
import { WorkspaceComponents } from './WorkspaceComponents';
import { moveOverWorkspaceAction } from '../actions';

const Style = {
  flex: '1',
  height: '100%',
  position: 'relative',
};

type Props = {
  state: WorkspaceState;
  dispatch: AppDispatch,
};

export class WorkspaceCom extends React.Component<Props> {
  onMouseMove = (e: SyntheticMouseEvent<*>) => {
    const
        // $FlowFixMe
        rect = e.target.getBoundingClientRect(),
        left = e.clientX - rect.left,
        top = e.clientY - rect.top;

    this.props.dispatch(moveOverWorkspaceAction({top, left}));
  }

  render() {
    const { state: { components, margin } } = this.props;

    return (
      <div style={Style} onMouseMove={this.onMouseMove}>
        <WorkspaceComponents components={components} />
        <WorkspaceMargin width={margin.width} />
      </div>
    )
  }
}

const mapStateToProps: any = (appState: AppState) => ({
  state: workspaceAppSel(appState),
});

// $FlowFixMe: TODO
export const Workspace = connect(mapStateToProps)(WorkspaceCom);
