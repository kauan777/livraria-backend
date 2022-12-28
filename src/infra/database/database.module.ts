import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaBooksRepository } from './prisma/repositories/prisma-books-repository';
import { BooksRepository } from 'src/app/repositories/book-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BooksRepository,
      useClass: PrismaBooksRepository,
    },
  ],
  exports: [BooksRepository],
})
export class DatabaseModule {}
