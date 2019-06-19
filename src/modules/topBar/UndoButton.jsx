/* @flow */

import React from 'react';
import { ActiveTopBarButton } from './ActiveTopBarButton';
import { UndoRedoStyle } from './styles';

type Props = {};

export class UndoButton extends React.Component<Props> {
  onClick = () => console.log('===undo click');

  render() {
    return (
      <ActiveTopBarButton
        active={false}
        style={UndoRedoStyle}
        onClick={this.onClick}
        title="Undo"
      >
        <span dangerouslySetInnerHTML={{ __html: '&#10550;' }} />
      </ActiveTopBarButton>
    );
  }
}
