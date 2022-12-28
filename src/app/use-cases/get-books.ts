import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BooksRepository } from '../repositories/book-repository';

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
