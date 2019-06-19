/* @flow */

import React from 'react';
import { BaseComponentInitialState } from '../base/BaseComponentInitialState';
import { ComponentKind } from '../ComponentKind';
import { BaseComponent } from '../base/BaseComponent';
import type { ButtonComponentProps } from './types';

export const ButtonComponentRecord = {
  initialState: {
    ...BaseComponentInitialState,
    kind: ComponentKind.BUTTON,
  },
  Ui: ({state}: ButtonComponentProps) => (
    <BaseComponent state={state}>Button</BaseComponent>
  )
};
