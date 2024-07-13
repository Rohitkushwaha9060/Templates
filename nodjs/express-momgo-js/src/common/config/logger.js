import { Logger } from '@rohit2005/logger';
import { configEnv } from './env.js';

// Create a new logger instance
export const logger = new Logger({
  logFiles: configEnv.NODE_ENV === 'development' ? false : true,
});
