import { Order } from '../../../app/entities/order';
import { InMemoryOrdersRepository } from '../../../../test/repositories/in-memory-orders-repository';

describe('Order', () => {
  it('should be able to create a order', () => {
    const orderRepository = new InMemoryOrdersRepository();

    const order = new Order({
      countItems: 4,
      emailCustomer: 'kauan7622@gmail.com',
      status: 'PENDENTE',
      total: 204.2,
    });

    orderRepository.create(order);

    expect(orderRepository.orders).toHaveLength(1);
    expect(orderRepository.orders[0]).toEqual(order);
  });
});
