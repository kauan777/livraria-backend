import { Injectable } from '@nestjs/common';
import { BooksRepository } from 'src/app/repositories/book-repository';
import { Book } from '../../entities/book';

interface CreateBookRequest {
  title: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
}

interface CreateBookResponse {
  book: Book;
}

@Injectable()
export class CreateBook {
  constructor(private bookRepository: BooksRepository) {}

  async execute(request: CreateBookRequest): Promise<CreateBookResponse> {
    const { category, description, price, quantity, title } = request;

    const book = new Book({
      category,
      description,
      price,
      quantity,
      title,
    });

    await this.bookRepository.create(book);

    return { book };
  }
}
