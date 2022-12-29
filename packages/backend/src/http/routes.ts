import { Router } from 'express';
import HelloController from './controllers/hello';
import StatusController from './controllers/status';
import { ProjectsController } from './controllers/projects';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/status', StatusController);

router.get('/v1/projects', ProjectsController);

export { router };
