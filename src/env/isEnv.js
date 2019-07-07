/* @flow */

const isEnv = (env: string): boolean => process.env.NODE_ENV === env;

export const
  isTestEnv = () => isEnv('test'),
  isNonTestEnv = () => !isTestEnv();
