import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// Components
import Navigation from './Components/Navigation';

// Material UI
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import 'typeface-roboto';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  theme = createMuiTheme({
    palette: {
      primary: {
        main: '#679488'
      },
      secondary: {
        main: '#AD7994'
      }
    }
  });

  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.theme}>
          <Navigation isLoggedIn={isLoggedIn} />
          <Router isLoggedIn={isLoggedIn} />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
