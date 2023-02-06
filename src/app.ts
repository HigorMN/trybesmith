import express from 'express';
import ProductRouter from './routes/Product.routes';
import UserRouter from './routes/User.routes';
import OrderRouter from './routes/Order.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;
