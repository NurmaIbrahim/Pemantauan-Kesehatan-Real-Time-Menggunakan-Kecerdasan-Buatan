import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AlertPage from './AlertPage';
import UserList from './UserList';
import UserPage from './UserPage';
import HealthDataPage from './HealthDataPage';
import NotFoundPage from './NotFoundPage';

const Routes = ({ users }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/alerts" component={AlertPage} />
      <Route exact path="/users" render={() => <UserList users={users} />} />
      <Route path="/users/:id" render={({ match }) => {
        const userId = parseInt(match.params.id, 10);
        const user = users.find(user => user.id === userId);
        return <UserPage user={user} />;
      }} />
      <Route path="/health-data" component={HealthDataPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

