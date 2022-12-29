import { Module } from '@nestjs/common';
import { ChangingStatusOrder } from 'src/app/use-cases/order/changing-status-order';
import { CreateOrder } from 'src/app/use-cases/order/create-order';
import { GetCustomerOrders } from 'src/app/use-cases/order/get-customer-orders';
import { DatabaseModule } from '../database/database.module';
import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [CreateOrder, GetCustomerOrders, ChangingStatusOrder],
})
export class OrderModule {}
