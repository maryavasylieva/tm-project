/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  TextField,
  Button,
  IconButton,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ErrorMessage } from 'formik';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    backgroundColor:
      'background: #3494E6; background: -webkit-linear-gradient(to left, #EC6EAD, #3494E6);background: linear-gradient(to left, #EC6EAD, #3494E6);',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    margin: '0 auto',
    width: '400px',
    padding: '40px 40px 40px 40px',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  headlineForm: {
    fontSize: '30px',
    color: '#091e3f',
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    margin: '20px 0 20px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    // padding-top: 20px;
    justifyContent: 'center',
  },
  formLabel: {
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    color: '#000000',
  },
  inputError: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
  },
});

const GreyCheckbox = withStyles({
  root: {
    color: '#383837',
    '&$checked': {
      color: '#383837',
    },
    margin: '12px 0 12px 0',
  },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const ColorButton = withStyles({
  root: {
    backgroundColor: '#383837',
    width: '400px',
    height: '50px',
    fontSize: '20px',
    textAlign: 'center',
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#383837',
    },
  },
})(Button);

type TLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
  handleBlur: (e: React.ChangeEvent<any>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.SyntheticEvent<any>) => void;
};

const AuthenticationForm = ({
  email,
  password,
  rememberMe,
  handleChange,
  handleBlur,
  handleSubmit,
}: TLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <h2 className={classes.headlineForm}>Log In</h2>
        <form className={classes.form} method="GET" onSubmit={handleSubmit}>
          <p className={classes.formLabel}>Email</p>
          <TextField
            label="Enter email"
            variant="outlined"
            size="small"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            autoFocus
            required
          />
          <ErrorMessage name="email" />
          <p className={classes.formLabel}>Password</p>
          <TextField
            label="Enter password"
            variant="outlined"
            size="small"
            name="password"
            autoComplete="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleClickShowPassword()}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <ErrorMessage name="password" />
          <FormControlLabel
            control={<GreyCheckbox name="rememberMe" />}
            label="Remember me"
            onChange={handleChange}
            value={rememberMe}
          />
          <ColorButton variant="contained" type="submit">
            Sign In
          </ColorButton>
        </form>
      </div>
      {/* <Link to="/main">Dashboard(test)</Link> */}
    </div>
  );
};

export default AuthenticationForm;
