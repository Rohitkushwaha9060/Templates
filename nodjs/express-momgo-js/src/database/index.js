import mongoose from 'mongoose';
import { configEnv, logger } from '../common/config/index.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(configEnv.DATABASE_URL);
    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error(error.message || 'database connection error');
    process.exit(1);
  }
};
