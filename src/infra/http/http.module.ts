import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BookModule } from './book.module';

@Module({
  imports: [DatabaseModule, BookModule],
})
export class HttpModule {}
