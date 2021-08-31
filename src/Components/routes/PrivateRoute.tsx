/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route, RouteProps } from 'react-router';

type TPrivateRouteProps = {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
} & RouteProps;

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: TPrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (!isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
