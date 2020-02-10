import React from 'react';
import TeacherCard from './TeacherCard';
import AddTeacher from './AddTeacher';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const EditTeachers = props => {
  const { teachers, saveEditedText, inputHandler, reRenderHelper } = props;

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column">
          <Grid item align="flex-start">
            <Typography variant="h3">Edit Teachers</Typography>
          </Grid>

          <Grid item align="center" justifyItems="center" xs={12}>
            <AddTeacher reRenderHelper={reRenderHelper} />
            {teachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                teachers={teacher}
                saveEditedText={saveEditedText}
                inputHandler={inputHandler}
                reRenderHelper={reRenderHelper}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditTeachers;
