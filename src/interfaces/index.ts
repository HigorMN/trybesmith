export interface IProduct {
  name: string,
  amount: string,
}

export interface Product extends IProduct {
  id: number,
}

export interface IProductOrder extends IProduct {
  id: number,
  orderId: number | null,
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number,
}

export interface IToken {
  token: string,
}

export interface IPayload {
  id: number,
  username: string,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface IUserLogin {
  username: string,
  password: string,
}