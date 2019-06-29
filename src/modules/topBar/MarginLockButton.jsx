/* @flow */

import React from 'react';
import { ActiveTopBarButton } from './ActiveTopBarButton';
import type { AppDispatch, AppState } from '../main/types';
import { isWorkspaceMarginLockedAppSel } from '../workspace/margin/selectors';
import { connectComponent } from '../common/connectComponent';
import { HtmlEntity } from '../common/ui/HtmlEntity';
import { toggleWorkspaceMarginAction } from '../workspace/margin/actions';

type Props = {
  isMarginLocked: boolean,
  dispatch: AppDispatch,
};

export class MarginLockButtonCom extends React.Component<Props> {
  onClick = () => this.props.dispatch(toggleWorkspaceMarginAction());
  
  render() {
    const
      {isMarginLocked} = this.props,
      icon = isMarginLocked ? '&#128275;' : '&#128274;';

    return (
      <ActiveTopBarButton
        active={isMarginLocked}
        onClick={this.onClick}
      >
        <HtmlEntity>{icon}</HtmlEntity>
      </ActiveTopBarButton>
    )
  }
}

const mapStateToProps = (appState: AppState) => ({
  isMarginLocked: isWorkspaceMarginLockedAppSel(appState),
});

export const MarginLockButton = connectComponent<Props>(MarginLockButtonCom, {
  mapStateToProps,
});
