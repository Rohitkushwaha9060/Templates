import express from 'express';
import http from 'http';
import ConfigureApp from './app.js';
import { logger, configEnv } from './common/config/index.js';
import { connectDB } from './database/index.js';

const app = express();
const server = http.createServer(app);

// Configure the app
ConfigureApp(app);

// connect to database
connectDB();

// Start the server
server.listen(configEnv.PORT, () => {
  logger.info('Server is running on port ' + configEnv.PORT);
});
