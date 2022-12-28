import { Book } from '../entities/book';

export abstract class BooksRepository {
  abstract create(book: Book): Promise<void>;
  abstract findMany(): Promise<Book[]>;
}
