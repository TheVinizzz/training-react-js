import { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../App';
import { IRoutes } from './interfaces';


export const routesConfig: IRoutes[] = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('../pages/Home')),
    },
    {
        exact: true,
        path: '/state',
        component: lazy(() => import('../pages/State')),
    }
]

const renderRoutes = (routes: IRoutes[]) => {
    return routes && (
        <Router history={history}>
            <Switch>
                {routes.map((route: any, i: number) => {
                    const Component = route.component;
                    return (
                        <Route
                            key={i.toString()}
                            path={route.path}
                            exact={route.exact}
                            render={props => route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                        />
                    );
                })}
            </Switch>
        </Router>
    )
};


const Routes: React.FC = () => {
    return renderRoutes(routesConfig);
};

export default Routes;