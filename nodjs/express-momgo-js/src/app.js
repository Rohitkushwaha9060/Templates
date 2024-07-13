import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import CookieParser from 'cookie-parser';
import { logger } from './common/config/index.js';
import { NotFoundError } from './common/errors/index.js';
import { globalErrorHandle } from './common/middlewares/index.js';

function ConfigureApp(app) {
  // json
  app.use(express.json({ limit: '50mb' }));
  // urlencoded
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // logger
  app.use(logger.httpExpress);

  // cors
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    })
  );
  // security
  app.use(helmet());
  // compression
  app.use(compression());

  // cookie parser
  app.use(CookieParser());

  // health check
  app.all('/health', (_, res, __) => {
    res.status(200).json({
      message: 'server is running ',
    });
  });

  app.all('*', (_, __, next) => {
    return next(new NotFoundError('route not found'));
  });

  // global error handler
  app.use(globalErrorHandle);
}

export default ConfigureApp;
