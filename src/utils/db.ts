import mongoose from 'mongoose';
import logger from './logger';

const connectToDB = async (mongoURI: string | undefined) => {
  if (mongoURI === undefined) throw new Error('Please provide a mongoDB uri');
  await mongoose.connect(mongoURI);
  logger.info('connected to MongoDB');
};

export default connectToDB;
