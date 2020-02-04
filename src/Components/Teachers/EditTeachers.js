import React from 'react';
import TeacherCard from './TeacherCard';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    width: '100vw'
  },
  teacherItem: {
    listStyle: 'none',
    border: '1px solid green'
  }
});

const EditTeachers = props => {
  const { teachers, isInEditMode } = props;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline>
        <Grid
          container
          className={classes.wrapper}
          display="flex"
          direction="column"
        >
          <Grid item align="center">
            <Typography container="h1" variant="h4">
              Edit Teachers
            </Typography>
          </Grid>

          <Grid item align="center">
            {teachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                className={classes.teacherItem}
                teachers={teacher}
                isInEditMode={isInEditMode}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditTeachers;
