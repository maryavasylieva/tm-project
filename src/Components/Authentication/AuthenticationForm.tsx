/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Checkbox, CheckboxProps, FormControlLabel, TextField, Button } from '@material-ui/core';

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

const AuthenticationForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <h2 className={classes.headlineForm}>Log In</h2>
        <form className={classes.form} method="GET">
          <p className={classes.formLabel}>Email</p>
          <TextField
            label="Enter email"
            variant="outlined"
            size="small"
            name="email"
            type="email"
            autoFocus
            required
          />
          <p className={classes.formLabel}>Password</p>
          <TextField
            label="Enter password"
            variant="outlined"
            size="small"
            name="password"
            autoComplete="password"
            required
          />
          <FormControlLabel control={<GreyCheckbox name="rememberMe" />} label="Remember me" />
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
