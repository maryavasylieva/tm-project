import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ErrorMessage } from 'formik';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    backgroundColor:
      'background: #3494E6; background: -webkit-linear-gradient(to left, #EC6EAD, #3494E6);background: linear-gradient(to left, #EC6EAD, #3494E6);',
    backgroundSize: 'cover',
  },
  formContainer: {
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const FormHeadline = withStyles({
  root: {
    fontSize: '30px',
    fontWeight: 600,
    margin: '20px 0 20px 0',
  },
})(Typography);

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

const FormLabel = withStyles({
  root: {
    marginTop: '12px',
    marginBottom: '12px',
    fontWeight: 400,
    fontSize: '18px',
  },
})(Typography);

type TLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
  open: boolean;
  handleBlur: (e: React.ChangeEvent<any>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleClose: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.SyntheticEvent<any>) => void;
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AuthenticationForm = ({
  email,
  password,
  rememberMe,
  open,
  handleChange,
  handleClose,
  handleBlur,
  handleSubmit,
}: TLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={classes.container}>
      <Box width={400} p={5} className={classes.formContainer}>
        <FormHeadline variant="h2" align="center" color="textPrimary">
          Log In
        </FormHeadline>
        <form className={classes.form} method="GET" onSubmit={handleSubmit}>
          <FormLabel variant="subtitle1" align="left">
            Email
          </FormLabel>
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
          <FormLabel variant="subtitle1" align="left">
            Password
          </FormLabel>
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
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Error when authenticating
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthenticationForm;
