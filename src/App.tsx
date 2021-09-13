import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from '@app/theme';
import { publicRoutes } from '@app/Components/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.Component}
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
