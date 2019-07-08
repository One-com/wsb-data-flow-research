/* @flow */

import sinonLib from 'sinon';
import { TestBenchStubLocalStorage } from './TestBenchStubLocalStorage';
import type { AppStatePartial } from '../../generators/appStateGen';
import { appStateGen } from '../../generators/appStateGen';
const UuidModule = require('../../../src/lib/uuid');

export class TestBenchStub {
  #sinon;
  #$uuid;
  #$ls;

  constructor() {
    this.#sinon = sinonLib.createSandbox();
  }

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
      this.#$ls = new TestBenchStubLocalStorage(this.#sinon);
    }
    return this.#$ls;
  }

  getStorageData(data: AppStatePartial) {
    return this.ls.getItem.returns(JSON.stringify(appStateGen(data)));
  }

  restore() {
    this.#sinon.restore();
  }
}
