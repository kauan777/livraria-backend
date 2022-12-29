import { randomUUID } from 'crypto';
import { Replace } from '../helpers/Replace';

export interface BookProps {
  title: string;
  description: string;
  category: string;
  price: number;
  createdAt: Date;

  quantity: number;
}

export class Book {
  private _id: string;
  private props: BookProps;

  constructor(props: Replace<BookProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }
  public set title(title: string) {
    this.props.title = title;
  }

  public get description(): string {
    return this.props.description;
  }
  public set description(description: string) {
    this.props.description = description;
  }

  public get price(): number {
    return this.props.price;
  }
  public set price(price: number) {
    this.props.price = price;
  }

  public get category(): string {
    return this.props.category;
  }
  public set category(category: string) {
    this.props.category = category;
  }

  public get quantity(): number {
    return this.props.quantity;
  }
  public set quantity(quantity: number) {
    this.props.quantity = quantity;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
