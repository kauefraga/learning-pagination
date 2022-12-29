import { Router } from 'express';
import HelloController from './controllers/hello';
import StatusController from './controllers/status';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/status', StatusController);

export { router };
