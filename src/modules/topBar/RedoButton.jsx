/* @flow */

import React from 'react';
import { ActiveTopBarButton } from './ActiveTopBarButton';
import { UndoRedoStyle } from './styles';

const Style = {
  ...UndoRedoStyle,
  marginLeft: '10px',
};

type Props = {};

export class RedoButton extends React.Component<Props> {
  onClick = () => console.log('===redo click');

  render() {
    return (
      <ActiveTopBarButton
        active={false}
        style={Style}
        onClick={this.onClick}
        title="Redo"
      >
        <span dangerouslySetInnerHTML={{ __html: '&#10551;' }} />
      </ActiveTopBarButton>
    );
  }
}
