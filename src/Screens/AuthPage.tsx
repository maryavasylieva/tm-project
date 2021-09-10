/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/comma-dangle */
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import AuthenticationForm from '@app/Components/Authentication';

const SIGNIN_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Password should be of minimum 4 characters length')
    .max(16, 'Too Long!')
    .required('Password is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
});

type TFormikValues = {
  email: string;
  password: string;
};

const AuthPage: React.FC = () => {
  const initialValues: TFormikValues = { email: '', password: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }: FormikHelpers<TFormikValues>) => {
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={SIGNIN_SCHEMA}
      >
        {({ values, handleSubmit, handleBlur, handleChange }) => (
          <AuthenticationForm
            password={values.password}
            email={values.email}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        )}
      </Formik>
    </div>
  );
};

export default AuthPage;
