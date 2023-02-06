import { Router } from 'express';

import OrderController from '../controllers/OrderController';
import ProductsIdsMiddleware from '../middlewares/ProductsIdsMiddleware';
import { verifyToken } from '../utils/jwt';

const router = Router();

const controller = new OrderController();

router.get('/', controller.getAll);

router.post('/', verifyToken, ProductsIdsMiddleware.validateBody, controller.create);

export default router;