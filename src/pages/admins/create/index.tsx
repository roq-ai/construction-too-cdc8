import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createAdmin } from 'apiSdk/admins';
import { adminValidationSchema } from 'validationSchema/admins';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { getUsers } from 'apiSdk/users';
import { getCompanies } from 'apiSdk/companies';
import { AdminInterface } from 'interfaces/admin';

function AdminCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: AdminInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createAdmin(values);
      resetForm();
      router.push('/admins');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AdminInterface>({
    initialValues: {
      can_add_tool: false,
      can_edit_tool: false,
      can_delete_tool: false,
      can_view_rentals: false,
      user_id: (router.query.user_id as string) ?? null,
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: adminValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Admins',
              link: '/admins',
            },
            {
              label: 'Create Admin',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Admin
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl
            id="can_add_tool"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.can_add_tool}
          >
            <FormLabel htmlFor="switch-can_add_tool">Can Add Tool</FormLabel>
            <Switch
              id="switch-can_add_tool"
              name="can_add_tool"
              onChange={formik.handleChange}
              value={formik.values?.can_add_tool ? 1 : 0}
            />
            {formik.errors?.can_add_tool && <FormErrorMessage>{formik.errors?.can_add_tool}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="can_edit_tool"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.can_edit_tool}
          >
            <FormLabel htmlFor="switch-can_edit_tool">Can Edit Tool</FormLabel>
            <Switch
              id="switch-can_edit_tool"
              name="can_edit_tool"
              onChange={formik.handleChange}
              value={formik.values?.can_edit_tool ? 1 : 0}
            />
            {formik.errors?.can_edit_tool && <FormErrorMessage>{formik.errors?.can_edit_tool}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="can_delete_tool"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.can_delete_tool}
          >
            <FormLabel htmlFor="switch-can_delete_tool">Can Delete Tool</FormLabel>
            <Switch
              id="switch-can_delete_tool"
              name="can_delete_tool"
              onChange={formik.handleChange}
              value={formik.values?.can_delete_tool ? 1 : 0}
            />
            {formik.errors?.can_delete_tool && <FormErrorMessage>{formik.errors?.can_delete_tool}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="can_view_rentals"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.can_view_rentals}
          >
            <FormLabel htmlFor="switch-can_view_rentals">Can View Rentals</FormLabel>
            <Switch
              id="switch-can_view_rentals"
              name="can_view_rentals"
              onChange={formik.handleChange}
              value={formik.values?.can_view_rentals ? 1 : 0}
            />
            {formik.errors?.can_view_rentals && <FormErrorMessage>{formik.errors?.can_view_rentals}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={getCompanies}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/admins')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'admin',
    operation: AccessOperationEnum.CREATE,
  }),
)(AdminCreatePage);
