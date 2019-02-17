import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../NotFound';
import Dashboard from '../Dashboard';

const MainRoutes = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default MainRoutes;
