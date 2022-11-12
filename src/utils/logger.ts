/* eslint-disable no-console */

const info = (...params: any[]) => {
  console.info('\x1b[36mINFO:', ...params);
};

const error = (...params: any[]) => {
  console.error('\x1b[31mERROR:', ...params);
};

export {
  info,
  error,
};
