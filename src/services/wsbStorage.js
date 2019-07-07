/* @flow */

import { STORAGE_KEY } from '../modules/storage/constants';
import { isTestEnv } from '../env/isEnv';

const getRndTime = () => Math.round(Math.random() * 500);

class WsbStorage
{
  getData<R: Object = Object>(): Promise<R | null> {
    return new Promise(resolve => setTimeout(
      () => {
        const
          dataRaw = localStorage.getItem(STORAGE_KEY),
          data = dataRaw && JSON.parse(dataRaw) || null;

        resolve(data)
      },
      isTestEnv() ? 0 : getRndTime(),
    ));
  }
}

export const wsbStorage = new WsbStorage();
