/* eslint-disable no-console */

const info = (...params: any[]) => {
  console.info('INFO:', ...params);
};

const error = (...params: any[]) => {
  console.error('ERROR:', ...params);
};

export {
  info,
  error,
};
