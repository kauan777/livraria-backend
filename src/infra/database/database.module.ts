import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaBooksRepository } from './prisma/repositories/prisma-books-repository';
import { BooksRepository } from 'src/app/repositories/book-repository';
import { OrdersRepository } from 'src/app/repositories/order-repository';
import { PrismaOrdersRepository } from './prisma/repositories/prisma-orders-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BooksRepository,
      useClass: PrismaBooksRepository,
    },
    {
      provide: OrdersRepository,
      useClass: PrismaOrdersRepository,
    },
  ],
  exports: [BooksRepository, OrdersRepository],
})
export class DatabaseModule {}
