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
  const { teachers, saveEditedText, inputHandler } = props;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline>
        <Grid
          container
          className={classes.wrapper}
          display="flex"
          direction="column"
          spacing={4}
        >
          <Grid item align="flex-start">
            <Typography variant="h3">Edit Teachers</Typography>
          </Grid>

          <Grid item align="center">
            {teachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                className={classes.teacherItem}
                teachers={teacher}
                saveEditedText={saveEditedText}
                inputHandler={inputHandler}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditTeachers;
