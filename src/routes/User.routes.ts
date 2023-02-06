import { Router } from 'express';

import UserController from '../controllers/UserController';
import LevelMiddleware from '../middlewares/LevelMiddleware';
import PasswordMiddleware from '../middlewares/PasswordMiddleware';
import UsernameMiddleware from '../middlewares/UsermameMiddleware';
import VocationMiddleware from '../middlewares/VocationMiddleware';

const router = Router();

const controller = new UserController();

router.use(UsernameMiddleware.validateBody);
router.use(VocationMiddleware.validateBody);
router.use(LevelMiddleware.validateBody);
router.use(PasswordMiddleware.validateBody);

router.post('/', controller.create);

export default router;