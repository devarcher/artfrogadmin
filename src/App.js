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
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.theme}>
          <Navigation />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
