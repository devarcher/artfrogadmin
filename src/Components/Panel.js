import React from 'react';

// Material UI
import 'typeface-roboto';

import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 150,
    width: 240
  }
}));

function Panel() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '85vh' }}
      >
        <Grid
          item
          display="flex"
          align="center"
          xs={12}
          sm={8}
          md={8}
          lg={4}
          xl={4}
        >
          <Paper display="flex" className={classes.paper}>
            <Typography variant="h5">
              Welcome to your Admin Panel. Navigate with the Links above!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Panel;
