import express from 'express';
import connectToDB from '@utils/db';
import logger from '@utils/logger';
import { MONGO_DB_URI, PORT } from '@utils/config';
import { userRouter } from '@controllers/app';

const app = express();

const startTheApp = async () => {
  try {
    await connectToDB(MONGO_DB_URI);
    app.use(express.json());
    app.use('/api/users', userRouter);

    app.listen(PORT, () => {
      logger.info(`Running on port: ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

startTheApp();
