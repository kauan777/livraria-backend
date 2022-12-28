import { Module } from '@nestjs/common';
import { CreateBook } from 'src/app/use-cases/create-book';
import { GetBooks } from 'src/app/use-cases/get-books';
import { DatabaseModule } from '../database/database.module';
import { BooksController } from './controllers/books.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [CreateBook, GetBooks],
})
export class BookModule {}
