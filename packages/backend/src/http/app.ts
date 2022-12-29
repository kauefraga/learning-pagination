import express, { Application } from 'express';
import { router } from './routes';

function buildApp(): Application {
  const app = express();

  // app.use(express.json());

  app.disable('x-powered-by'); // don't expose that this application use express

  app.use(router);

  return app;
}

export default buildApp();
