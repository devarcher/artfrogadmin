import React from 'react';
import { Link } from 'react-router-dom';

// Material UI stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/core/styles';

// Pop Up Menu
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#679488'
    },
    secondary: {
      main: '#DC6866'
    }
  }
});

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  links: {
    marginRight: '20px',
    textDecoration: 'none',
    color: 'white'
  }
}));

function Navigation(props) {
  const classes = useStyles();
  const { loggedIn, logOutHandler } = props;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            ArtFrog Academy
          </Typography>
          {loggedIn && (
            <>
              <Typography variant="h6">
                <Link to="/panel/classes" className={classes.links}>
                  Classes
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/panel/students" className={classes.links}>
                  Students
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/panel/teachers" className={classes.links}>
                  Teachers
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/panel/board" className={classes.links}>
                  Board
                </Link>
              </Typography>

              <Button
                variant="outlined"
                color="inherit"
                onClick={logOutHandler}
              >
                LOG OUT
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navigation;
