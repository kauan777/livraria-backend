import { Controller, Post, Body, Param, Patch, Get } from '@nestjs/common';
import { StatusOrderProps } from 'src/app/entities/order';
import { ChangingStatusOrder } from 'src/app/use-cases/order/changing-status-order';
import { CreateOrder } from 'src/app/use-cases/order/create-order';
import { GetCustomerOrders } from 'src/app/use-cases/order/get-customer-orders';
import { CreateOrdersBody } from '../dtos/create-orders-body';
import { OrderViewModel } from '../view-models/order-view-model';

@Controller('orders')
export class OrdersController {
  constructor(
    private getCustomerOrders: GetCustomerOrders,
    private changingStatusOrder: ChangingStatusOrder,
    private createOrder: CreateOrder,
  ) {}

  @Patch(':id')
  async updatingStatus(
    @Param('id') id: string,
    @Body() body: { status: StatusOrderProps },
  ) {
    const { status } = body;

    if (
      !status ||
      !['CANCELADO', 'PENDENTE', 'APROVADO', 'EM ROTA', 'ENTREGUE'].includes(
        status,
      )
    ) {
      throw new Error('Status is empty or incorret form');
    }

    await this.changingStatusOrder.execute({
      id,
      status,
    });
  }

  @Get(':email')
  async getFromCustomer(@Param('email') email: string) {
    const { orders } = await this.getCustomerOrders.execute({ email });
    return {
      orders: orders.map(OrderViewModel.toHTTP),
    };
  }

  @Post()
  async create(@Body() body: CreateOrdersBody) {
    const { countItems, emailCustomer, total } = body;

    await this.createOrder.execute({
      countItems,
      emailCustomer,
      total,
    });
  }
}
