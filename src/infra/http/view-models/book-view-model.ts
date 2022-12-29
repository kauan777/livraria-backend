import { Book } from 'src/app/entities/book';

export class BookViewModel {
  static toHTTP(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      category: book.category,
      price: book.price,
      quantity: book.quantity,
      createdAt: book.createdAt,
    };
  }
}
