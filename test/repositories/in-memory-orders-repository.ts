import { Order, StatusOrderProps } from 'src/app/entities/order';
import { OrdersRepository } from 'src/app/repositories/order-repository';

export class InMemoryOrdersRepository implements OrdersRepository {
  public orders: Order[] = [];

  async changingStatus(status: StatusOrderProps, id: string): Promise<void> {
    const orderIndex = this.orders.findIndex((item) => item.id == id);

    if (orderIndex >= 0) {
      this.orders[orderIndex].status = status;
    }
  }

  async findManyByEmail(email: string): Promise<Order[]> {
    return this.orders.filter((order) => order.emailCustomer == email);
  }

  async create(order: Order): Promise<void> {
    this.orders.push(order);
  }
}
