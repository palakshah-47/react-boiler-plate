// @packages
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// @scripts
import Login from '../../pages/login';
import routes from './routes.json';

const componentMapper = {
    Login
};

const Routes = () => (
        <Switch>
            {Object.values(routes).map((route) => (
                (
                    <Route
                        key={route.name}
                        path={route.url}
                        component={componentMapper[route.component]}
                    />
                )
            ))}
            <Redirect
                from="/"
                to={routes.login.url}
            />
        </Switch>
);

export default Routes;
