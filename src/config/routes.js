import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';

const Routes = props => (
  <Switch>
    <Route path='/' exact component={HomePage} />
  </Switch>
);

export default Routes;
