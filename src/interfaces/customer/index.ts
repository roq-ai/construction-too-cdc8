import { RentalInterface } from 'interfaces/rental';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  company_id: string;
  rented_tool_id: string;
  rental_start_date?: any;
  rental_end_date?: any;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  tool?: ToolInterface;
  _count?: {
    rental?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  rented_tool_id?: string;
}
