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