import { Order as RawOrder } from '@prisma/client';
import { Order } from 'src/app/entities/order';

export class PrismaOrderMapper {
  static toPrisma(order: Order) {
    return {
      id: order.id,
      countItems: order.countItems,
      emailCustomer: order.emailCustomer,
      total: order.total,
      createdAt: order.createdAt,
      status: order.status,
    };
  }

  static toDomain(raw: RawOrder): Order {
    const status: any = raw.status;

    return new Order(
      {
        countItems: raw.countItems,
        emailCustomer: raw.emailCustomer,
        status,
        total: Number(raw.total),
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
