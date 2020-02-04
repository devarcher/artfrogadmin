import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Auth
import auth from './Components/Auth/Auth';

// Components
import Login from './Components/Auth/Login';
import Board from './Components/Board/Board';
import Classes from './Components/Classes/Classes';
import Students from './Components/Students/Students';
import TeachersData from './Components/Teachers/TeachersData';
import Panel from './Components/Panel';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/admin/" component={Login} />
      <ProtectedRoute exact path="/panel" component={Panel} />
      <ProtectedRoute path="/panel/board" component={Board} />
      <ProtectedRoute path="/panel/classes" component={Classes} />
      <ProtectedRoute path="/panel/students" component={Students} />
      <ProtectedRoute path="/panel/teachers" component={TeachersData} />
    </Switch>
  );
};

export default Router;
