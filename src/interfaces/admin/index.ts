import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AdminInterface {
  id?: string;
  user_id: string;
  company_id: string;
  can_add_tool?: boolean;
  can_edit_tool?: boolean;
  can_delete_tool?: boolean;
  can_view_rentals?: boolean;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface AdminGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
}
