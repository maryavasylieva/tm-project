/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/comma-dangle */
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import AuthenticationForm from '@app/Components/Authentication';
import { useState } from 'react';

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
  rememberMe: boolean;
};

const AuthPage: React.FC = () => {
  const initialValues: TFormikValues = { email: '', password: '', rememberMe: false };

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }: FormikHelpers<TFormikValues>) => {
          setTimeout(() => {
            if (
              values.email !== process.env.REACT_APP_EMAIL ||
              values.password !== process.env.REACT_APP_PASSWORD
            ) {
              setOpen(true);
            } else {
              localStorage.setItem('email', values.email);
              localStorage.setItem('rememberMe', String(values.rememberMe));
            }
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
            rememberMe={values.rememberMe}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            open={open}
            handleClose={handleClose}
          />
        )}
      </Formik>
    </div>
  );
};

export default AuthPage;
