import { Request, Response, NextFunction } from 'express';

export default class VocationMiddleware {
  public static validateFields = (vocation: string) => {
    if (typeof vocation !== 'string') {
      return { status: 422, message: '"vocation" must be a string' };
    }

    if (vocation.length <= 2) {
      return { status: 422, message: '"vocation" length must be at least 3 characters long' };
    }
  };

  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { vocation } = req.body;

    if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

    const validFields = this.validateFields(vocation);

    if (validFields) return res.status(validFields.status).json({ message: validFields.message });
    
    next();
  };
}