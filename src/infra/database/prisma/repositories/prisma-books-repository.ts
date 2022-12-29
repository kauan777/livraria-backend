import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaBookMapper } from '../mappers/prisma-book-mapper';
import { BooksRepository } from 'src/app/repositories/book-repository';
import { Book } from 'src/app/entities/book';

@Injectable()
export class PrismaBooksRepository implements BooksRepository {
  constructor(private prisma: PrismaService) {}
  async findMany(): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return books.map(PrismaBookMapper.toDomain);
  }

  async create(book: Book): Promise<void> {
    const raw = PrismaBookMapper.toPrisma(book);

    await this.prisma.book.create({
      data: raw,
    });
  }
}
