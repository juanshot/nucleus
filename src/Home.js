import React from 'react';
import { Route } from 'react-router-dom';

import UsersList from './components/UsersList';
import Person from './components/Person';

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
