import { Book as RawBook } from '@prisma/client';
import { Book } from 'src/app/entities/book';

export class PrismaBookMapper {
  static toPrisma(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      category: book.category,
      price: book.price,
      quantity: book.quantity,
    };
  }

  static toDomain(raw: RawBook): Book {
    return new Book(
      {
        title: raw.title,
        category: raw.category,
        price: Number(raw.price),
        description: raw.description,
        quantity: raw.quantity,
      },
      raw.id,
    );
  }
}
