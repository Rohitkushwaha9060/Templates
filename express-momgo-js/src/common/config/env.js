import dotenv from 'dotenv';

dotenv.config();

const _env = {
  //  ports
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  //  database
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
};

export const configEnv = Object.freeze(_env);
