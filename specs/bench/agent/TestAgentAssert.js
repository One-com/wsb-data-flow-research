/* @flow */

import type { AppSel } from '../../../src/modules/main/types';
import { TestAgentStore } from './TestAgentStore';
import type { SaveStatusT } from '../../../src/modules/save_deprecated/types';
import { saveStatusAppSel } from '../../../src/modules/save_deprecated/selectors';

type AssertResult = Promise<JestExpectType>;

export class TestAgentAssert
{
  #store: TestAgentStore;

  constructor(store: TestAgentStore)
  {
    this.#store = store;
  }

  actionCalled(actionType: string, expectedShape?: Object) {
    return this._await(() => {
      if (expectedShape) {
        expect(this.#store.dispatchedActions.find(a => a.type === actionType)).toMatchObject(expectedShape);
      } else {
        expect(this.#store.dispatchedActions.find(a => a.type === actionType)).toBeDefined();
      }
    })
  }

  appState(selector?: AppSel<*> = s => s): AssertResult {
    return this.#store.getState(selector).then(state => expect(state));
  }

  saveStatus(status: SaveStatusT): AssertResult {
    return this.appState(saveStatusAppSel);
  }

  _await(cb?: Function) {
    return new Promise<*>(resolve => setTimeout(() => {
      if (cb) cb();
      resolve();
    }));
  }
}
