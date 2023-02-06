import { Request, Response } from 'express';

import OrderService from '../services/OrderService';
import { IReqUser } from '../interfaces';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  };

  public create = async (req: Request & IReqUser, res: Response) => {
    const { id } = req.user as { id: number; username: string };
    const { type, message } = await this.service.create(id, req.body);

    return res.status(type).json(message);
  };
}