/* @flow */

import React from 'react';
import type { SaveStatusT } from '../save_deprecated/types';
import {
  TopBarContainerStyle,
  TopBarInnerContainerStyle,
  TopBarRightContainerStyle,
} from './styles';
import { SaveButton } from './SaveButton';
import { UndoButton } from './UndoButton';
import { RedoButton } from './RedoButton';
import { MarginLockButton } from './MarginLockButton';
import type { AppState } from '../main/types';
import { saveStatusAppSel } from '../save_deprecated/selectors';
import { connectComponent } from '../common/connectComponent';

type Props = {
  saveStatus: SaveStatusT,
};

export class TopBarCom extends React.Component<Props> {
  render() {
    const { saveStatus } = this.props;

    return (
      <header
        style={TopBarContainerStyle}
      >
        <div style={TopBarInnerContainerStyle}>
          <div>
            <MarginLockButton />
          </div>
          <div style={TopBarRightContainerStyle}>
            <UndoButton />
            <RedoButton />
            <SaveButton saveStatus={saveStatus} />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  saveStatus: saveStatusAppSel(appState),
});

export const TopBar = connectComponent(TopBarCom, {
  mapStateToProps,
});
