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
      icon = isMarginLocked ? '&#128274;' : '&#128275;',
      title = `Workspace margin ${isMarginLocked ? 'locked' : 'unlocked'}`;

    return (
      <ActiveTopBarButton
        active={isMarginLocked}
        isMutable={false}
        title={title}
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

// $FlowFixMe: TODO babel issue
export const MarginLockButton = connectComponent(MarginLockButtonCom, {
  mapStateToProps,
});
