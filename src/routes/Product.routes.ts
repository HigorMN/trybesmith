import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import ProductMiddleware from '../middlewares/ProductMiddleware';

const router = Router();

const controller = new ProductController();

router.get('/', controller.getAll);

router.use(ProductMiddleware.validateBody);
router.post('/', controller.create);

export default router;