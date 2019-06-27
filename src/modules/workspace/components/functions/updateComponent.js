/* @flow */

import type { SingleComponentState } from '../../../components/types';
import type { Components } from '../types';

type Params = {
  id: string,
  patch: $Shape<SingleComponentState<*>>,
  components: Components,
};

export const updateComponent = ({id, patch, components}: Params) => {
  let found = false;

  const nextComponents: Components = components.reduce((acc, com) => {
    let nextCom;

    if (com.id === id) {
      nextCom = {...com, ...patch};
      found = found || true;
    } else {
      nextCom = com;
    }

    return acc.concat(nextCom);
  }, []);

  if (!found) {
    throw new Error(`Component not found by id: ${id}`);
  }

  return nextComponents;
};
