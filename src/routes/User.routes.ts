import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = Router();

const controller = new UserController();

router.post('/', controller.create);

export default router;