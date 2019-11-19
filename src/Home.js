import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersList from './components/UsersList';
import Person from './components/Person';
import NotFound from './NotFound'

function Home() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <UsersList />
          )}
        />
        <Route
          path="/person/:userName"
          component={Person}
        />
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default Home;
