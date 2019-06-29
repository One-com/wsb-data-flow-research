/* @flow */

import React from 'react';
import { getWorkspaceMarginStyle } from './styles';

type Props = {
  width: number,
};

export const WorkspaceMargin = ({ width }: Props) => (
  <div
    style={getWorkspaceMarginStyle({width})}
  />
);
