/* @flow */

import type { ComponentsState } from '../components/types';
import type { SingleComponentState } from '../../components/types';

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

type Params = {
  components: ComponentsState,
  id: string,
  partial: $Shape<SingleComponentState<>>,
};

export const updateComponentById = ({components, id, partial}: Params): ComponentsState => {
  let updated = false;
  
  const nextComponents = components.map(com => {
    if (com.id === id) {
      updated = updated || true;
      
      // check fields to remove
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
    }
    
    return com;
  });
  
  if (updated) {
    return nextComponents;
  }
  
  throw new Error(`Did not find component by id: ${id}`);
};
