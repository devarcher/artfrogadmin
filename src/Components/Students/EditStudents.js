import React from 'react';
import StudentCard from './StudentCard';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const EditStudents = props => {
  const { students, onUpdatedDataBase } = props;

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h3">Edit Students</Typography>
          </Grid>

          <Grid item align="center" xs={12} sm={10} md={8} lg={8} xl={8}>
            {students.map(student => (
              <StudentCard
                key={student.id}
                students={student}
                onUpdatedDataBase={onUpdatedDataBase}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditStudents;
