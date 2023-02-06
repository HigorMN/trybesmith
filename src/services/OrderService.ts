import { IOrder } from '../interfaces';
import OrderModel from '../models/OrderModel';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async () => {
    const orders: IOrder[] = await this.model.getAll();
    return orders;
  };

  public create = async (userId: number, body: { productsIds: number[] }) => {
    const createdOrders = await this.model.create(userId, body.productsIds);
    return { type: 201, message: createdOrders };
  };
}