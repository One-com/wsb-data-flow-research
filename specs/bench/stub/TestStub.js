/* @flow */

import sinonLib from 'sinon';
import { TestStubLocalStorage } from './TestStubLocalStorage';
import type { AppStatePartial } from '../../generators/appStateGen';
import { appStateGen } from '../../generators/appStateGen';
import { APP_STATE_SAVE_KEY } from '../../../src/modules/save/constants';
const UuidModule = require('../../../src/lib/uuid');

export class TestStub {
  #sinon;
  #$uuid;
  #$ls;

  constructor() {
    this.#sinon = sinonLib.createSandbox();
  }

  get sinon() { return this.#sinon }

  get uuid() {
    if (!this.#$uuid) {
      this.#$uuid = this.#sinon.stub(UuidModule, 'uuid');
    }
    return this.#$uuid;
  }

  uuidCycle(n: number) {
    let i = 1;
    return this.uuid.callsFake(() => {
      if (i > n) i = 1;
      return i++;
    })
  }

  get ls() {
    if (!this.#$ls) {
      this.#$ls = new TestStubLocalStorage(this.#sinon);
    }
    return this.#$ls;
  }

  getStorageData(data: AppStatePartial | null) {
    return this.ls.getItem
      .withArgs(APP_STATE_SAVE_KEY)
      .returns(
        data === null
          ? null
          : JSON.stringify(appStateGen(data))
      );
  }

  setStorageData() {
    // Just make sure storage is mocked
    this.ls;
  }

  restore() {
    this.#sinon.restore();
  }
}
