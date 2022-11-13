/* eslint-disable no-console */

const BAR = '==========================================';
const INFO_COLOR_PREFIX = '\x1b[36m';
const ERROR_COLOR_PREFIX = '\x1b[31m';

const info = (...params: any[]) => {
  console.info(`${INFO_COLOR_PREFIX}INFO:`, ...params);
};

const error = (...params: any[]) => {
  if (params.length === 1 && params[0] instanceof Error) {
    console.log(ERROR_COLOR_PREFIX);
    console.log(BAR);
    console.log(`ERROR: ${params[0].name}`);
    console.log(`DESCRIPTION: ${params[0].message}`);
    console.log(`STACK: ${params[0].stack}`);
    console.log(BAR);
  } else {
    console.error(`${ERROR_COLOR_PREFIX}ERROR: `, ...params);
  }
};

const logger = {
  info,
  error,
};

export default logger;
