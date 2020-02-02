import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// Components
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Panel from './Components/Panel';

// Material UI
import 'typeface-roboto';

class App extends React.Component {
  state = {
    loggedIn: false
  };

  // Login Page Login Handler
  logInHandler = () => {
    this.setState({ loggedIn: true });
  };

  // Panel Log Out Handler
  logOutHandler = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <BrowserRouter>
        <Navigation />
        {loggedIn ? (
          <Panel logOutHandler={this.logOutHandler} />
        ) : (
          <Login logInHandler={this.logInHandler} />
        )}
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
