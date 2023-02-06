import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const created = await this.service.create(user);

    return res.status(201).json(created);
  };
}