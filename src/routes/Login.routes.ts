import { Router } from 'express';

import UserController from '../controllers/UserController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const router = Router();

const controller = new UserController();

router.use(LoginMiddleware.validateBody);

router.post('/', controller.login);

export default router;