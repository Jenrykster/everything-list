import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, MONGO_DB_URI } = process.env;

export {
  PORT,
  MONGO_DB_URI,
};
