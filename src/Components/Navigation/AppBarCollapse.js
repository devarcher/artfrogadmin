import React from 'react';
import { Link, Redirect } from 'react-router-dom';

// Material UI stuff
import { Button, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/core/styles';

import ButtonAppBarCollapse from './ButtonAppBarCollapse';

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

const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    display: 'flex',
    marginRight: '20px'
  }
});

const AppBarCollapse = props => {
  const { logOutHandler } = props;
  const classes = useStyles();
  return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => logOutHandler(() => <Redirect to="/admin" />)}
        >
          LOG OUT
        </Button>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
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
          onClick={() => logOutHandler(() => <Redirect to="/admin" />)}
        >
          LOG OUT
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(AppBarCollapse);
