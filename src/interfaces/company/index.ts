import { AdminInterface } from 'interfaces/admin';
import { CustomerInterface } from 'interfaces/customer';
import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin?: AdminInterface[];
  customer?: CustomerInterface[];
  tool?: ToolInterface[];
  user?: UserInterface;
  _count?: {
    admin?: number;
    customer?: number;
    tool?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
