import React, { useState } from 'react';
import StudentCard from './StudentCard';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';
const EditStudents = props => {
  const { students, onUpdatedDataBase } = props;

  let newStudents = [...students];

  const onSortNameAsc = () => {
    newStudents.sort(function(a, b) {
      let nameA = a.last_name.toLowerCase();
      let nameB = b.last_name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    console.log(newStudents);
  };

  const onSortNameDesc = () => {
    newStudents.sort(function(a, b) {
      let nameA = a.last_name.toLowerCase();
      let nameB = b.last_name.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    console.log(newStudents);
  };

  const onSortCreatedAsc = () => {
    newStudents.sort(function(a, b) {
      let numA = a.id;
      let numB = b.id;
      if (numA > numB) {
        return 1;
      }
      if (numA < numB) {
        return -1;
      }
      return 0;
    });
    console.log(newStudents);
  };

  const onSortCreatedDesc = () => {
    newStudents.sort(function(a, b) {
      let numA = a.id;
      let numB = b.id;
      if (numA < numB) {
        return 1;
      }
      if (numA > numB) {
        return -1;
      }
      return 0;
    });
    console.log(newStudents);
  };

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h3">Edit Students</Typography>
          </Grid>

          <ButtonGroup
            onSortNameAsc={onSortNameAsc}
            onSortNameDesc={onSortNameDesc}
            onSortCreatedAsc={onSortCreatedAsc}
            onSortCreatedDesc={onSortCreatedDesc}
          />
          <Grid item align="center" xs={12} sm={10} md={8} lg={8} xl={8}>
            {newStudents.map(student => (
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
