import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import UsersList from './components/UsersList';
import Person from './components/Person';
import './App.css';

function Home() {
  return (
    <div>
      <AppBar />
      <Route
        exact
        path="/"
        render={() => (
          <UsersList />
        )}
      />
      <Route
        path="/person/:name"
        component={Person}
      />
    </div>
  );
}

export default Home;
