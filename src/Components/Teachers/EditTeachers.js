import React from 'react';
import TeacherCard from './TeacherCard';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  teacherItem: {
    listStyle: 'none'
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
          spacing={2}
          display="flex"
          direction="column"
          align="center"
        >
          <Grid item>
            <Typography container="h1" variant="h4">
              Edit Teachers
            </Typography>
          </Grid>

          <Grid item>
            <ul>
              {teachers.map(teacher => (
                <li key={teacher.id} className={classes.teacherItem}>
                  <TeacherCard teachers={teacher} isInEditMode={isInEditMode} />
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditTeachers;
