import React from 'react';
import { Switch, Route } from 'react-router';

// Components
import Board from './Components/Board';
import Classes from './Components/Classes';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import Landing from './Components/Landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/board" component={Board} />
      <Route path="classes" component={Classes} />
      <Route path="/students" component={Students} />
      <Route path="/teachers" component={Teachers} />
    </Switch>
  );
};

export default Router;
