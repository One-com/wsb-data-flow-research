/* @flow */

import React from 'react';
import { SaveStatus } from '../save_deprecated/constants';
import { ActiveTopBarButton } from './ActiveTopBarButton';
import type { SaveStatusT } from '../save_deprecated/types';
import { saveAction } from '../save_deprecated/actions';
import type { AppDispatch } from '../main/types';
import { connectComponent } from '../common/connectComponent';

const Style = {
  width: '70px',
  height: '30px',
  marginLeft: '10px',
};

type Props = {
  saveStatus: SaveStatusT,
  dispatch: AppDispatch,
};

export class SaveButtonCom extends React.Component<Props> {
  onClick = () => {
    if (this.props.saveStatus === SaveStatus.UNSAVED) {
      this.props.dispatch(saveAction());
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

// $FlowFixMe
export const SaveButton = connectComponent(SaveButtonCom);
