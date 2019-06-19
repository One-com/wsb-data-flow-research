/* @flow */

import React from 'react';
import { makeBaseComponentInitialState } from '../base/makeBaseComponentInitialState';
import { ComponentKind } from '../ComponentKind';
import { BaseComponent } from '../base/BaseComponent';
import type { ButtonComponentProps } from './types';

export const ButtonComponentRecord = {
  initialState: () => makeBaseComponentInitialState(ComponentKind.BUTTON),
  Ui: ({state}: ButtonComponentProps) => (
    <BaseComponent state={state}>Button</BaseComponent>
  )
};
