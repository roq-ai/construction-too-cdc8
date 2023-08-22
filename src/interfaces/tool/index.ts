import { CustomerInterface } from 'interfaces/customer';
import { RentalInterface } from 'interfaces/rental';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  availability?: boolean;
  rental_price?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];
  rental?: RentalInterface[];
  company?: CompanyInterface;
  _count?: {
    customer?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
