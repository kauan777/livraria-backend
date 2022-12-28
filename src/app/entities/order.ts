import { randomUUID } from 'crypto';
import { Replace } from '../helpers/Replace';

export type StatusOrderProps =
  | 'CANCELADO'
  | 'PENDENTE'
  | 'APROVADO'
  | 'ENTREGUE';

export interface OrderProps {
  createdAt: Date;
  countItems: number;
  emailCustomer: string;
  total: number;
  status: StatusOrderProps;
}

export class Order {
  private _id: string;
  private props: OrderProps;

  constructor(props: Replace<OrderProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get emailCustomer(): string {
    return this.props.emailCustomer;
  }
  public set emailCustomer(emailCustomer: string) {
    this.props.emailCustomer = emailCustomer;
  }

  public get countItems(): number {
    return this.props.countItems;
  }
  public set countItems(countItems: number) {
    this.props.countItems = countItems;
  }

  public get total(): number {
    return this.props.countItems;
  }
  public set total(total: number) {
    this.props.total = total;
  }

  public get status(): StatusOrderProps {
    return this.props.status;
  }
  public set status(status: StatusOrderProps) {
    this.props.status = status;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
