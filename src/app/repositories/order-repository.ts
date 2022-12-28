import { Order, StatusOrderProps } from '../entities/order';

export abstract class OrdersRepository {
  abstract create(order: Order): Promise<void>;
  abstract findManyByEmail(emailCustomer: string): Promise<Order[]>;
  abstract changingStatus(status: StatusOrderProps, id: string): Promise<void>;
}
