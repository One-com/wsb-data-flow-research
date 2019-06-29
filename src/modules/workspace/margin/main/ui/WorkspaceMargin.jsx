/* @flow */

import React from 'react';
import { getWorkspaceMarginStyle } from './styles';
import { WorkspaceMarginHandle } from '../../handles/ui/WorkspaceMarginHandle';

type Props = {
  width: number,
};

export const WorkspaceMargin = ({ width }: Props) => (
  <div
    style={getWorkspaceMarginStyle({width})}
  >
    <WorkspaceMarginHandle left />
  </div>
);
