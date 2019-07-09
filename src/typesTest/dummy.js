/* @flow */

import type { FnReturn } from '../modules/common/commonTypes';

const someAction = (payload: { foo: 'bar' }) => ({
  type: 'SOME_ACTION',
  payload,
});

// type SomeAction = $Exact<FnReturn<typeof someAction>>;
// type SomeAction = $Exact<$Call<typeof someAction, {foo: 'bar'}>>;

type ReturnTypeHelper = <T>((...Array<any>) => T) => T;
type ReturnType<Fn> =  $Call<ReturnTypeHelper, Fn>;
type SomeAction = ReturnType<typeof someAction>;

const someReducer = (state: Object, action: SomeAction): Object => {
  if (action.type === 'blah') {
    
  }

  return state;
};
