/* @flow */

import * as React from 'react';
import type {Position} from '../../../../common/commonTypes';
import { getWorkspaceMarginHandleStyle } from './getWorkspaceMarginHandleStyle';
import type { AppDispatch, AppState } from '../../../../main/types';
import { workspaceWidthAppSel } from '../../../width/selectors';
import { workspaceMarginWidthAppSel } from '../selectors';
import { connectComponent } from '../../../../common/connectComponent';
import { isWorkspaceMarginLockedAppSel } from '../../main/selectors';
import { calculateWorkspaceMarginValue } from '../functions/calculateWorkspaceMarginValue';
import { Draggable } from '../../../../draggable/Draggable';
import { moveLeftWorkspaceMarginHandleAction, moveRightWorkspaceMarginHandleAction } from '../actions';

type Props = {
  isLocked: boolean,
  width: number,
  wsWidth: number,
  dispatch: AppDispatch,
  isLeft?: boolean,
  isRight?: boolean,
};

export class WorkspaceMarginHandleCom extends React.Component<Props> {
  // $FlowFixMe: TODO
  onDrag = (pos: Position) => {
    const {isLeft, isRight, dispatch} = this.props;
    
    if (isLeft) {
      dispatch(moveLeftWorkspaceMarginHandleAction(pos.left))
    } else {
      dispatch(moveRightWorkspaceMarginHandleAction(pos.left));
    }
  };
  
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
