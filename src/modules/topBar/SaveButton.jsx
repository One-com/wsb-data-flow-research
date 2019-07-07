/* @flow */

import React from 'react';
import { SaveStatus } from '../save/constants';
import { ActiveTopBarButton } from './ActiveTopBarButton';
import type { SaveStatusT } from '../save/types';

const Style = {
  width: '70px',
  height: '30px',
  marginLeft: '10px',
};

type Props = {
  saveStatus: SaveStatusT,
};

export class SaveButton extends React.Component<Props> {
  onClick = () => {
    if (this.props.saveStatus === SaveStatus.UNSAVED) {
      console.log('===on save click');
    }
  };

  render() {
    const {saveStatus} = this.props;

    return (
      <ActiveTopBarButton
        active={saveStatus === SaveStatus.UNSAVED}
        style={Style}
        onClick={this.onClick}
      >
        {saveStatus === SaveStatus.UNSAVED ? 'Save' : 'Saved'}
      </ActiveTopBarButton>
    );
  }
}
