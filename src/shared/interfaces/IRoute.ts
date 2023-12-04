interface RouteParams {
  category: string;
}

interface Route {
  key: string;
  name: string;
  params: RouteParams;
  path?: string;
}

export interface RouteProps {
  params: { category: string };
  route: Route;
}
