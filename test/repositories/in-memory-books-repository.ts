import { Book } from 'src/app/entities/book';
import { BooksRepository } from 'src/app/repositories/book-repository';

export class InMemoryBooksRepository implements BooksRepository {
  public books: Book[] = [];

  async findMany(): Promise<Book[]> {
    return this.books;
  }

  async create(book: Book): Promise<void> {
    this.books.push(book);
  }
}
