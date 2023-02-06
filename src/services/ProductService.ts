import { IProduct, Product } from '../interfaces';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const created: Product = await this.model.create(product);
    return created;
  };
}