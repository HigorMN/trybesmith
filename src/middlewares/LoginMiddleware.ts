import { Request, Response, NextFunction } from 'express';
import { IUserLogin } from '../interfaces';

export default class LoginMiddleware {
  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body as IUserLogin;
    
    if (!username) return res.status(400).json({ message: '"username" is required' });

    if (!password) return res.status(400).json({ message: '"password" is required' });

    next();
  };
}