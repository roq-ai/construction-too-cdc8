import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  can_add_tool: yup.boolean().nullable(),
  can_edit_tool: yup.boolean().nullable(),
  can_delete_tool: yup.boolean().nullable(),
  can_view_rentals: yup.boolean().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
