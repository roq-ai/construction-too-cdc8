import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  rental_start_date: yup.date().nullable(),
  rental_end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
  rented_tool_id: yup.string().nullable().required(),
});
