import React from 'react';
import { Switch, Route } from 'react-router';

// Components
import Board from './Components/Board';
import Classes from './Components/Classes';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import Panel from './Components/Panel';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/panel" component={Panel} />
      <Route path="/panel/board" component={Board} />
      <Route path="/panel/classes" component={Classes} />
      <Route path="/panel/students" component={Students} />
      <Route path="/panel/teachers" component={Teachers} />
    </Switch>
  );
};

export default Router;