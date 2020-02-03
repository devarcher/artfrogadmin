import React from 'react';
import TeacherCard from './TeacherCard';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const EditTeachers = props => {
  const { teachers } = props;

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
                <li key={teacher.id}>
                  <TeacherCard teachers={teacher} />
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
