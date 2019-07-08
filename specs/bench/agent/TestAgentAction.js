/* @flow */

import { TestAgentStore } from './TestAgentStore';
import { mountAppAction } from '../../../src/modules/main/actions';
import { saveAction } from '../../../src/modules/storage/actions';
import type { ComponentKindT } from '../../../src/modules/components/types';
import { addComponentAction } from '../../../src/modules/workspace/components/actions';

export class TestAgentAction
{
  #store: TestAgentStore;

  constructor(store: TestAgentStore)
  {
    this.#store = store;
  }
  
  dispatch(action: Object) {
    this.#store.dispatch(action);
  }
  
  mount() { this.dispatch(mountAppAction()) }
  
  save() { this.dispatch(saveAction()) }
  
  addComponent(kind: ComponentKindT) {
    return this.dispatch(addComponentAction(kind));
  }
}
