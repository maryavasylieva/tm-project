/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect, RouteProps } from 'react-router';

type TPublicRouteProps = {
  component: JSX.Element;
  isAuthenticated: boolean;
} & RouteProps;

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }: TPublicRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PublicRoute;
