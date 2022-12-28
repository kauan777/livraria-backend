import { Book } from '../entities/book';

describe('Book', () => {
  it('should be able to create a book', () => {
    const book = new Book({
      title: 'Código Limpo',
      description: 'O melhor livro de arquitetura de software',
      price: -2,
      category: 'study',
      quantity: -3,
    });
    expect(book).toBeTruthy();
  });
});
