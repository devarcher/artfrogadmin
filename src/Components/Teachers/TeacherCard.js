import React from 'react';
import { Typography, CssBaseline, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
});

const TeacherCard = props => {
  const { teachers, isInEditMode } = props;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline>
        <Card>
          <form className="form" noValidate autoComplete="off">
            <Typography container="h3" variant="h6">
              First Name: {teachers.first_name}
            </Typography>
            <Typography>Last Name: {teachers.last_name}</Typography>
            <Typography>Bio: {teachers.bio}</Typography>
          </form>
        </Card>
      </CssBaseline>
    </div>
  );
};

export default TeacherCard;
