/* @flow */

import { addComponentAction } from '../../workspace/components/actions';
import { ComponentKind } from '../ComponentKind';

export const addButtonComponentAction = () => addComponentAction(ComponentKind.BUTTON);
