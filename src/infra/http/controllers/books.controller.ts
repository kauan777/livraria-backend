import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateBookBody } from '../dtos/create-books-body';
import { BookViewModel } from '../view-models/book-view-model';
import { GetBooks } from 'src/app/use-cases/book/get-books';
import { CreateBook } from 'src/app/use-cases/book/create-book';

@Controller('books')
export class BooksController {
  constructor(private getBooks: GetBooks, private createBook: CreateBook) {}

  @Get()
  async findAllBooks() {
    const { books } = await this.getBooks.execute();

    return books.map(BookViewModel.toHTTP);
  }

  @Post()
  async create(@Body() body: CreateBookBody) {
    const { category, description, price, quantity, title } = body;

    const { book } = await this.createBook.execute({
      category,
      description,
      price,
      quantity,
      title,
    });

    return {
      notification: BookViewModel.toHTTP(book),
    };
  }
}
