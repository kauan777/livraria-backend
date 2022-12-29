import { Order } from 'src/app/entities/order';

export class OrderViewModel {
  static toHTTP(order: Order) {
    return {
      id: order.id,
      countItems: order.countItems,
      emailCustomer: order.emailCustomer,
      total: order.total,
      status: order.status,
    };
  }
}
