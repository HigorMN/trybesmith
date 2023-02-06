import { Request, Response, NextFunction } from 'express';

export default class LevelMiddleware {
  public static validateFields = (level: number) => {
    if (typeof level !== 'number') {
      return { status: 422, message: '"level" must be a number' };
    }

    if (level <= 0) {
      return { status: 422, message: '"level" must be greater than or equal to 1' };
    }
  };

  public static validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;

    if (level === undefined) return res.status(400).json({ message: '"level" is required' });

    const validFields = this.validateFields(level);

    if (validFields) return res.status(422).json({ message: validFields.message });
    
    next();
  };
}