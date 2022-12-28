import { Order, OrderProps } from '../../src/app/entities/order';

type Override = Partial<OrderProps>;

export function makeOrder(override: Override = {}) {
  return new Order({
    countItems: 23,
    emailCustomer: 'kauan7622@gmail.com',
    status: 'PENDENTE',
    total: 230.2,
    ...override,
  });
}
