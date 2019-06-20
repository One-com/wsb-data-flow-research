/* @flow */

import sinonLib from 'sinon';
const UuidModule = require('../../src/lib/functions/uuid');

export class TestBenchStub {
  _sinon;
  _uuid;

  constructor() {
    this._sinon = sinonLib.createSandbox();
  }

  get uuid() {
    if (!this._uuid) {
      this._uuid = this._sinon.stub(UuidModule, 'uuid');
    }
    return this._uuid;
  }

  uuidCycle(n: number) {
    let i = 1;
    return this.uuid.callsFake(() => {
      if (i > n) i = 1;
      return i++;
    })
  }

  restore() {
    this._sinon.restore();
  }
}
