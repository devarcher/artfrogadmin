import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// Components
import Navigation from './Components/Navigation';

// Material UI
import 'typeface-roboto';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
