/* @flow */

import * as React from 'react';
import type { Position } from '../common/commonTypes';

export type DraggableHandler = (pos: Position, e: SyntheticEvent<*>) => void;
