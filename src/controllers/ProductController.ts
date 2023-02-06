import { Request, Response } from 'express';

import { IProduct } from '../interfaces';
import ProductService from '../services/ProductService';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const created = await this.service.create(product);

    return res.status(201).json(created);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };
}