import express from 'express';
import connectToDB from '@utils/db';
import logger from '@utils/logger';
import { MONGO_DB_URI, PORT } from '@utils/config';

const app = express();

const startTheApp = async () => {
  try {
    await connectToDB(MONGO_DB_URI);
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(PORT, () => {
      logger.info(`Running on port: ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

startTheApp();
