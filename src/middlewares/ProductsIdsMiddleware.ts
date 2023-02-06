import { Request, Response, NextFunction } from 'express';

export default class ProductsIdsMiddleware {
  public static validateFields = (productsIds: number[]) => {
    if (typeof productsIds !== 'object') {
      return { status: 422, message: '"productsIds" must be an array' };
    }

    if (!productsIds.every((infos) => typeof infos === 'number') || productsIds.length === 0) {
      return { status: 422, message: '"productsIds" must include only numbers' };
    }
  };

  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;

    if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

    const validFields = this.validateFields(productsIds);

    if (validFields) return res.status(validFields.status).json({ message: validFields.message });
    
    next();
  };
}