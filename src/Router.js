import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Components
import App from './App';
import Login from './Components/Auth/Login';
import Board from './Components/Board/Board';
import Classes from './Components/Classes/Classes';
import Students from './Components/Students/Students';
import TeachersData from './Components/Teachers/TeachersData';
import Panel from './Components/Panel';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to="/admin" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/admin" component={Login} />
      <ProtectedRoute exact path="/panel" component={Panel} />
      <ProtectedRoute path="/panel/board" component={Board} />
      <ProtectedRoute path="/panel/classes" component={Classes} />
      <ProtectedRoute path="/panel/students" component={Students} />
      <Route path="/panel/teachers" component={TeachersData} />
      <Route path="/panel/*" component={() => '404 Not Found'} />
    </Switch>
  );
};

export default Router;
