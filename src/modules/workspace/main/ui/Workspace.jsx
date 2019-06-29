/* @flow */

import * as React from 'react';
import {connect} from 'react-redux';
import type { AppDispatch, AppState } from '../../../main/types';
import { workspaceAppSel } from '../selectors';
import type { WorkspaceState } from '../types';
import { WorkspaceComponents } from './WorkspaceComponents';
import { WorkspaceStatus } from '../../status/constants';
import { WorkspaceLoading } from './WorkspaceLoading';
import type { ReactElementRef } from '../../../common/commonTypes';
import { setWorkspaceWidthAction } from '../../width/actions';
import { WorkspaceMarginHandle } from '../../margin/width/ui/WorkspaceMarginHandle';

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
  ref: ReactElementRef<'div'>;

  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount(): void {
    if (this.ref.current) {
      this.props.dispatch(setWorkspaceWidthAction(this.ref.current.getBoundingClientRect().width));
    }
  }

  render() {
    const { state: { components, margin, status } } = this.props;

    return (
      <div style={Style} ref={this.ref}>
        {status === WorkspaceStatus.INITIALIZING
          ? <WorkspaceLoading />
          : <WorkspaceComponents components={components} />
        }
        <WorkspaceMarginHandle isLeft />
      </div>
    )
  }
}

const mapStateToProps: any = (appState: AppState) => ({
  state: workspaceAppSel()(appState),
});

// $FlowFixMe: TODO
export const Workspace = connect(mapStateToProps)(WorkspaceCom);
