import { makeOrder } from '../../../../test/factories/order-factory';
import { InMemoryOrdersRepository } from '../../../../test/repositories/in-memory-orders-repository';

describe('Order', () => {
  it('should be able to change status order', async () => {
    const orderRepository = new InMemoryOrdersRepository();

    await orderRepository.create(
      makeOrder({ emailCustomer: 'kaka@gmail.com' }),
    );

    await orderRepository.changingStatus(
      'APROVADO',
      orderRepository.orders[0].id,
    );
    expect(orderRepository.orders[0].status).toEqual('APROVADO');
    console.log(orderRepository.orders[0]);
  });
});
