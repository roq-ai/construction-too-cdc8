import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
