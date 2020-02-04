import React from 'react';
import { Typography, CssBaseline, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    marginBottom: '10px',
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'flex-start'
  }
});

const TeacherCard = props => {
  const { teachers, isInEditMode } = props;
  const classes = useStyles();

  return (
    <>
      <CssBaseline>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <form noValidate autoComplete="off">
              <Typography container="h3" variant="body1">
                <strong>First Name: </strong> {teachers.first_name}
              </Typography>
              <Typography>
                <strong>Last Name: </strong>
                {teachers.last_name}
              </Typography>
              <Typography>
                <strong>Bio: </strong>
                {teachers.bio}
              </Typography>
            </form>
          </Card>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default TeacherCard;
