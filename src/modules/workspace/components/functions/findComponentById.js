/* @flow */

import type { Components } from '../types';
import type { SingleComponentState } from '../../../components/types';

export const findComponentById = (id: string, components: Components): SingleComponentState<*> => {
  const com = components.find(c => c.id === id);
  
  if (!com) {
    throw new Error(`Cannot find component by id: ${id}`);
  }
  
  return com;
};
