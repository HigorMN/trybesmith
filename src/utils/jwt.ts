import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IPayload, IReqUser } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const generateToken = (payload: IPayload) => 
  jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

export const verifyToken = (req: Request & IReqUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const verification = jwt.verify(token, JWT_SECRET) as IPayload;
    const payload = { id: verification.id, username: verification.username };
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};