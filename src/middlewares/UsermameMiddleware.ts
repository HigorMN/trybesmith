import { Request, Response, NextFunction } from 'express';

export default class UsernameMiddleware {
  public static validateFields = (username: string) => {
    if (typeof username !== 'string') {
      return { status: 422, message: '"username" must be a string' };
    }

    if (username.length <= 2) {
      return { status: 422, message: '"username" length must be at least 3 characters long' };
    }
  };

  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (!username) return res.status(400).json({ message: '"username" is required' });

    const validFields = this.validateFields(username);

    if (validFields) return res.status(validFields.status).json({ message: validFields.message });
    
    next();
  };
}