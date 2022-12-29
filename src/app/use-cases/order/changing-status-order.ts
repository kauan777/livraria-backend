import { Injectable } from '@nestjs/common';
import { StatusOrderProps } from 'src/app/entities/order';
import { OrdersRepository } from 'src/app/repositories/order-repository';

interface GetCustomerOrdersRequest {
  id: string;
  status: StatusOrderProps;
}

@Injectable()
export class ChangingStatusOrder {
  constructor(private orderRepository: OrdersRepository) {}

  async execute(request: GetCustomerOrdersRequest): Promise<void> {
    const { id, status } = request;

    await this.orderRepository.changingStatus(status, id);
  }
}
