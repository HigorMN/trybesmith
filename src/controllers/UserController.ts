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

  public findByUsername = async (req: Request, res: Response) => {
    const { username } = req.body;

    const user = await this.service.findByUsername(username);

    return res.status(200).json(user);
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const loginUser = await this.service.login(username, password);

    if (loginUser.type) return res.status(loginUser.type).json({ message: loginUser.message });

    return res.status(200).json({ token: loginUser.token });
  };
}