import { Injectable } from '@nestjs/common';
import { Order, StatusOrderProps } from 'src/app/entities/order';
import { OrdersRepository } from 'src/app/repositories/order-repository';

interface CreateOrderRequest {
  countItems: number;
  emailCustomer: string;
  total: number;
  status: StatusOrderProps;
}

interface CreateOrderResponse {
  order: Order;
}

@Injectable()
export class CreateOrder {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const { countItems, emailCustomer, status, total } = request;

    const order = new Order({
      countItems,
      emailCustomer,
      status,
      total,
    });

    await this.orderRepository.create(order);

    return { order };
  }
}
