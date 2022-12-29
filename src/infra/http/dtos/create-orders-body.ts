/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrdersBody {
  @IsNotEmpty()
  @IsPositive()
  countItems: number;

  @IsNotEmpty()
  emailCustomer: string;

  @IsNotEmpty()
  @IsPositive()
  total: number;
}
