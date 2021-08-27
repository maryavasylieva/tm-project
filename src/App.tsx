import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";


import {publicRoutes} from "./Components/routes";



const App = () => {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      <h1>Hello World!</h1>
      <Switch>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {route.Component}
          </Route>
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}

export default App;
