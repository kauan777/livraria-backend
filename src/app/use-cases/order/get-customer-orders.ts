import { Injectable } from '@nestjs/common';
import { Order } from 'src/app/entities/order';
import { OrdersRepository } from 'src/app/repositories/order-repository';

interface GetCustomerOrdersRequest {
  email: string;
}

interface GetCustomerOrdersResponse {
  orders: Order[];
}

@Injectable()
export class GetCustomerOrders {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(
    request: GetCustomerOrdersRequest,
  ): Promise<GetCustomerOrdersResponse> {
    const { email } = request;

    const orders = await this.orderRepository.findManyByEmail(email);

    return { orders };
  }
}
