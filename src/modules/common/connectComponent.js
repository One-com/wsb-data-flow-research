/* @flow */

import * as React from 'react';
import {connect} from 'react-redux';
import type { AppDispatch } from '../main/types';

type Options = {
  mapStateToProps?: Function, // TODO: proper type
};

export const connectComponent = <Props: Object = Object>(
  Component: React.ComponentType<Props & {dispatch: AppDispatch}>,
  options?: Options = {},
): React.ComponentType<$Diff<Props, Props>> => connect(options.mapStateToProps)(Component);
