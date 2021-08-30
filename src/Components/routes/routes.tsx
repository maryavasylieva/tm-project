type TRoute = {
  path: string;
  Component: JSX.Element;
  exact?: boolean;
  name: string;
};

export const publicRoutes: TRoute[] = [];
export const privateRoutes: TRoute[] = [];
