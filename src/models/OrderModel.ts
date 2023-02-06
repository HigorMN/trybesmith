import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const query = `SELECT  orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products 
    ON products.order_id = orders.id GROUP BY orders.id;`;

    const [data] = await this.connection.execute(query);

    return data as IOrder[];
  };

  public async create(userId: number, productsIds: number[]) {
    const query = 'INSERT INTO Trybesmith.orders(user_id) VALUES(?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);

    await Promise.all(
      productsIds.map(async (e: number) => {
        const query2 = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
        await this.connection.execute(query2, [insertId, e]);
        return e;
      }),
    );

    return { userId, productsIds };
  }
}