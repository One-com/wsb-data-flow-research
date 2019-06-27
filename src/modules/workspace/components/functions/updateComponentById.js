/* @flow */

import type { SingleComponentState } from '../../../components/types';
import type { Components } from '../types';

const mapRemoveFields = (o: Object, fields: Array<string>): Object =>
  Object
    .keys(o)
    .reduce(
      (acc, k) => (
        fields.indexOf(k) > -1
          ? acc
          : Object.assign(acc, {[k]: o[k]})
      ),
      {},
    );

const updateCom = (com, partial) => {
  const removeFields = Object.keys(partial).filter(k => partial[k] === undefined);

  if (removeFields.length) {
    return {
      ...mapRemoveFields(com, removeFields),
      ...mapRemoveFields(partial, removeFields),
    };
  }

  return {
    ...com,
    ...partial,
  };
};

type Patch = $Shape<SingleComponentState<*>>;

type Params = {
  id: string,
  partial: Patch,
  components: Components,
  otherComPartial?: Patch,
};

export const updateComponentById = ({id, partial, components, otherComPartial}: Params) => {
  let found = false;

  const nextComponents: Components = components.reduce((acc, com) => {
    let nextCom;

    if (com.id === id) {
      nextCom = updateCom(com, partial);
      found = found || true;
    } else {
      nextCom = otherComPartial ? updateCom(com, otherComPartial) : com;
    }

    return acc.concat(nextCom);
  }, []);

  if (!found) {
    throw new Error(`Component not found by id: ${id}`);
  }

  return nextComponents;
};
