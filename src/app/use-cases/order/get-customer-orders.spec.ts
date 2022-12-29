import { makeOrder } from '../../../../test/factories/order-factory';
import { InMemoryOrdersRepository } from '../../../../test/repositories/in-memory-orders-repository';

describe('Order', () => {
  it('should be able to list all orders by email', async () => {
    const orderRepository = new InMemoryOrdersRepository();

    await orderRepository.create(
      makeOrder({ emailCustomer: 'kaka@gmail.com' }),
    );

    await orderRepository.create(
      makeOrder({ emailCustomer: 'kaka@gmail.com' }),
    );

    const orders = await orderRepository.findManyByEmail('kaka@gmail.com');

    expect(orders).toHaveLength(2);
    expect(orders).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ emailCustomer: 'kaka@gmail.com' }),
        expect.objectContaining({ emailCustomer: 'kaka@gmail.com' }),
      ]),
    );
    console.log(orders);
  });
});
