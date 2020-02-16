import React from 'react';
import TeacherCard from './TeacherCard';
import AddTeacher from './AddTeacher';
import { ReactComponent as Icon } from '../../Assets/AFLogo.svg';

// Material UI
import { Grid, Typography, CssBaseline, Box } from '@material-ui/core';

const EditTeachers = props => {
  const { teachers, onUpdatedDataBase } = props;

  return (
    <div>
      <CssBaseline>
        <Grid
          container
          display="flex"
          direction="column"
          alignItems="center"
          style={{ minHeight: '85vh', marginTop: '35px' }}
        >
          <Grid item>
            <Typography variant="h4">Edit Teachers</Typography>
          </Grid>

          <Grid item align="center" xs={12} sm={10} md={8} lg={8} xl={8}>
            <AddTeacher onUpdatedDataBase={onUpdatedDataBase} />
            {teachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                teachers={teacher}
                onUpdatedDataBase={onUpdatedDataBase}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditTeachers;
