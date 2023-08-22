import { Homepage } from './../pages/Homepage';
import { Auth } from './../pages/Auth/Auth';
import { NotFoundPage } from './../pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    AUTH = 'auth',
    HOMEPAGE = 'homepage',
    NOT_FOUND = 'not_found',
}
export type IRouteConfig = RouteProps & {
    routeTitle?: string,
    isApp?: boolean,
    path: string
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.HOMEPAGE]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, IRouteConfig> = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <Auth />,
    },
    [AppRoutes.HOMEPAGE]: {
        path: RoutePath.homepage,
        element: <Homepage />,
        routeTitle: 'Homepage',
        isApp: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
