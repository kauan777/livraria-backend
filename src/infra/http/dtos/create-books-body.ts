/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateBookBody {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsPositive()
  quantity: number;

  @IsNotEmpty()
  @IsPositive()
  price: number;
}
