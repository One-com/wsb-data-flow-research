/* @flow */

import * as React from 'react';
import { getWorkspaceMarginHandleStyle } from './getWorkspaceMarginHandleStyle';
import type { AppState } from '../../../../main/types';
import { workspaceWidthAppSel } from '../../../width/selectors';
import { workspaceMarginWidthAppSel } from '../selectors';
import { connectComponent } from '../../../../common/connectComponent';
import { isWorkspaceMarginLockedAppSel } from '../../main/selectors';
import { calculateWorkspaceMarginValue } from '../functions/calculateWorkspaceMarginValue';
import { Draggable } from '../../../../draggable/Draggable';

type Props = {
  isLocked: boolean,
  width: number,
  wsWidth: number,
  isLeft?: boolean,
  isRight?: boolean,
};

export class WorkspaceMarginHandleCom extends React.Component<Props> {
  // $FlowFixMe: TODO
  onDrag = (pos) => {
    console.log('===onDrag', pos);
  }
  
  render() {
    const
      {isLocked, isLeft, isRight, width, wsWidth} = this.props,
      margin = calculateWorkspaceMarginValue(width, wsWidth),
      position = {
        top: 0,
        left: isLeft ? margin : width + margin,
      },
      style = getWorkspaceMarginHandleStyle({isLocked, position});

    if (isLocked) {
      return (
        <div style={style} />
      );
    }
    
    return (
      <Draggable
        position={position}
        style={style}
        onDrag={this.onDrag}
      />
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  isLocked: isWorkspaceMarginLockedAppSel(appState),
  width: workspaceMarginWidthAppSel(appState),
  wsWidth: workspaceWidthAppSel(appState),
});

// $FlowFixMe TODO
export const WorkspaceMarginHandle = connectComponent(WorkspaceMarginHandleCom, {
  mapStateToProps,
});
