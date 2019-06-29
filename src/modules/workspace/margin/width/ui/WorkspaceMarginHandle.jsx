/* @flow */

import * as React from 'react';
import { getWorkspaceMarginHandleStyles } from './getWorkspaceMarginHandleStyles';
import type { AppState } from '../../../../main/types';
import { workspaceWidthAppSel } from '../../../width/selectors';
import { workspaceMarginWidthAppSel } from '../selectors';
import { connectComponent } from '../../../../common/connectComponent';

type Props = {
  width: number,
  wsWidth: number,
  isLocked: boolean,
  left?: boolean,
  right?: boolean,
};

export class WorkspaceMarginHandleCom extends React.Component<Props> {
  render() {
    const {width, wsWidth, isLocked, left, right} = this.props;
    
    return (
      <div
        style={getWorkspaceMarginHandleStyles({
          width,
          wsWidth,
          isLocked,
          left,
          right,
        })}
      />
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  width: workspaceMarginWidthAppSel(appState),
  wsWidth: workspaceWidthAppSel(appState),
});

// $FlowFixMe TODO
export const WorkspaceMarginHandle = connectComponent(WorkspaceMarginHandleCom, {
  mapStateToProps,
});
