/* @flow */

import { STORAGE_KEY } from '../modules/storage/constants';
import { isTestEnv } from '../env/isEnv';

const getRndTime = () => Math.round(Math.random() * 500);

class WsbStorage
{
  getData<R: Object = Object>(): Promise<R | null> {
    if (isTestEnv()) {
      return Promise.resolve(this._getDataFromLocalStorage());
    }

    return new Promise(resolve => setTimeout(
      () => {
        const
          dataRaw = localStorage.getItem(STORAGE_KEY),
          data = dataRaw && JSON.parse(dataRaw) || null;

        resolve(data)
      },
      getRndTime(),
    ));
  }

  _getDataFromLocalStorage() {
    const
      dataRaw = localStorage.getItem(STORAGE_KEY),
      data = dataRaw && JSON.parse(dataRaw) || null;

    return data;
  }
}

export const wsbStorage = new WsbStorage();
