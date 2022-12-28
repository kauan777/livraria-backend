import { InMemoryBooksRepository } from '../../../test/repositories/in-memory-books-repository';
import { Book } from '../entities/book';

describe('Book', () => {
  it('should be able to list a book', () => {
    const bookRepository = new InMemoryBooksRepository();

    const book = new Book({
      title: 'Código Limpo',
      description: 'O melhor livro de arquitetura de software',
      price: 32,
      category: 'study',
      quantity: 43,
    });

    bookRepository.create(book);
    bookRepository.create(book);

    expect(bookRepository.books).toHaveLength(2);
    console.log(bookRepository.books);
  });
});
