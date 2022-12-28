import { Injectable } from '@nestjs/common';
import { BooksRepository } from 'src/app/repositories/book-repository';
import { Book } from '../../entities/book';

interface GetBooksResponse {
  books: Book[];
}

@Injectable()
export class GetBooks {
  constructor(private bookRepository: BooksRepository) {}

  async execute(): Promise<GetBooksResponse> {
    const books = await this.bookRepository.findMany();

    return { books };
  }
}
