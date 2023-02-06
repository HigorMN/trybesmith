import { Request, Response, NextFunction } from 'express';

export default class PasswordMiddleware {
  public static validateFields = (password: string) => {
    if (typeof password !== 'string') {
      return { status: 422, message: '"password" must be a string' };
    }

    if (password.length <= 7) {
      return { status: 422, message: '"password" length must be at least 8 characters long' };
    }
  };

  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: '"password" is required' });

    const validFields = this.validateFields(password);

    if (validFields) return res.status(validFields.status).json({ message: validFields.message });
    
    next();
  };
}