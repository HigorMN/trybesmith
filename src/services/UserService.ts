import { IToken, IUser } from '../interfaces';
import UserModel from '../models/UserModel';
import connection from '../models/connection';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const created: IToken = await this.model.create(user);
    return created;
  };
}