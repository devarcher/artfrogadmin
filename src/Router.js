import React from 'react';
import { Switch, Route } from 'react-router';

// Components
import Login from './Components/Auth/Login';
import Board from './Components/Board/Board';
import Classes from './Components/Classes/Classes';
import Students from './Components/Students/Students';
import TeachersData from './Components/Teachers/TeachersData';
import Panel from './Components/Panel';

const Router = () => {
  return (
    <Switch>
      <Route path="/admin/" component={Login} />
      <Route exact path="/panel" component={Panel} />
      <Route path="/panel/board" component={Board} />
      <Route path="/panel/classes" component={Classes} />
      <Route path="/panel/students" component={Students} />
      <Route path="/panel/teachers" component={TeachersData} />
    </Switch>
  );
};

export default Router;
