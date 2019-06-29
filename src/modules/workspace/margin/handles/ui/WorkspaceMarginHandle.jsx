/* @flow */

import * as React from 'react';
import { getMarginWidthHandleStyle } from './styles';
import type { AppState } from '../../../../main/types';
import { isWorkspaceMarginLockedAppSel } from '../../main/selectors';
import { connectComponent } from '../../../../common/connectComponent';

type Props = {
  isMarginWidthLocked: boolean,
  left?: boolean,
  right?: boolean,
};

export class WorkspaceMarginHandleCom extends React.Component<Props> {
  render() {
    const {isMarginWidthLocked, left, right} = this.props;
    
    return (
      <div style={getMarginWidthHandleStyle({
        isMarginWidthLocked,
        left,
        right,
      })} />
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  isMarginWidthLocked: isWorkspaceMarginLockedAppSel(appState),
});

// $FlowFixMe: TODO: babel issue
export const WorkspaceMarginHandle = connectComponent(WorkspaceMarginHandleCom, {
  mapStateToProps,
});
  