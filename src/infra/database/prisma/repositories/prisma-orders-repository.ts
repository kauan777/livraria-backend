import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrdersRepository } from 'src/app/repositories/order-repository';
import { Order, StatusOrderProps } from 'src/app/entities/order';
import { PrismaOrderMapper } from '../mappers/prisma-order-mapper';

@Injectable()
export class PrismaOrdersRepository implements OrdersRepository {
  constructor(private prisma: PrismaService) {}
  async create(order: Order): Promise<void> {
    const raw = PrismaOrderMapper.toPrisma(order);
    await this.prisma.order.create({
      data: {
        ...raw,
        status: 'PENDENTE',
      },
    });
  }
  async findManyByEmail(emailCustomer: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        emailCustomer,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return orders.map(PrismaOrderMapper.toDomain);
  }
  async changingStatus(status: StatusOrderProps, id: string): Promise<void> {
    await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }
}
