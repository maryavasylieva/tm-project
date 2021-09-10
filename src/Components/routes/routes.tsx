import { lazy } from 'react';

type TRoute = {
  path: string;
  Component: React.ReactNode;
  exact?: boolean;
  name: string;
};
const AsyncAuthPage = lazy(
  () => import('@app/Screens/Auth') /* webpackChunkName: "authentification-page" */
);

export const publicRoutes: TRoute[] = [
  {
    path: '/',
    exact: true,
    Component: <AsyncAuthPage />,
    name: '',
  }
];
export const privateRoutes: TRoute[] = [];
