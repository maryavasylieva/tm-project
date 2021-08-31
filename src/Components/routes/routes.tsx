
type TRoute = {
  path: string;
  Component: React.ComponentType<any>;
  exact?: boolean;
  name: string;
};

export const publicRoutes: TRoute[] = [];
export const privateRoutes: TRoute[] = [];