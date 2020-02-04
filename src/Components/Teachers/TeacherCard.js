import React from 'react';
import { Typography, CssBaseline, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    marginBottom: '10px',
    border: '1px solid red'
  }
});

const TeacherCard = props => {
  const { teachers, isInEditMode } = props;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline>
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
      </CssBaseline>
    </div>
  );
};

export default TeacherCard;
