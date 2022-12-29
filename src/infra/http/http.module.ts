import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BookModule } from './book.module';
import { OrderModule } from './order.module';

@Module({
  imports: [DatabaseModule, BookModule, OrderModule],
})
export class HttpModule {}
