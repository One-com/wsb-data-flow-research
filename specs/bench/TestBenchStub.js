/* @flow */

import sinonLib from 'sinon';
const UuidModule = require('../../src/lib/functions/uuid');

export class TestBenchStub {
  #sinon;
  #$uuid;

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

  restore() {
    this.#sinon.restore();
  }
}
