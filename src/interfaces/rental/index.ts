import { CustomerInterface } from 'interfaces/customer';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  customer_id: string;
  tool_id: string;
  rental_start_date?: any;
  rental_end_date?: any;
  total_price?: number;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  tool_id?: string;
}
