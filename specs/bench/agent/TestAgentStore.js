/* @flow */

import type { AppSel, AppState, AppStore } from '../../../src/modules/main/types';
import { createAppStore } from '../../../src/modules/main/createAppStore';

export class TestAgentStore
{
  #store: AppStore;
  
  constructor(preloadedState?: AppState = {})
  {
    this.#store = createAppStore(preloadedState);
  }

  dispatch(action: Object) {
    this.#store.dispatch(action);
  }
  
  getState<R: any = AppState>(selector?: AppSel<*> = s => s): Promise<R> {
    return new Promise(resolve => setTimeout(
      () => {
        // $FlowFixMe: TODO
        resolve(selector(this.#store.getState()));
      },
    ));
  }
}
