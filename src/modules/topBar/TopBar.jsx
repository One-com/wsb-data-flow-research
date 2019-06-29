/* @flow */

import React from 'react';
import type { SaveStatusT } from '../saveStatus/types';
import {
  TopBarContainerStyle,
  TopBarInnerContainerStyle,
  TopBarRightContainerStyle,
} from './styles';
import { SaveButton } from './SaveButton';
import { UndoButton } from './UndoButton';
import { RedoButton } from './RedoButton';
import { MarginLockButton } from './MarginLockButton';

type Props = {
  saveStatus: SaveStatusT,
};

export class TopBar extends React.Component<Props> {
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
