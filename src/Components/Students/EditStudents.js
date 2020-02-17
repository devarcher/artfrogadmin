import React from 'react';
import StudentCard from './StudentCard';
import ButtonGroup from '../SingleComponents/ButtonGroupStudents';
import SearchField from '../SingleComponents/SearchField';

// Material UI
import { Grid, CssBaseline } from '@material-ui/core';
const EditStudents = props => {
  const {
    students,
    onUpdatedDataBase,
    onSortNameAsc,
    onSortNameDesc,
    onSortCreatedAsc,
    onSortCreatedDesc,
    searchFieldText,
    query
  } = props;

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column" alignItems="center">
          <Grid item>
            <SearchField
              searchFieldText={searchFieldText}
              students={students}
              query={query}
            />
          </Grid>

          <ButtonGroup
            onSortNameAsc={onSortNameAsc}
            onSortNameDesc={onSortNameDesc}
            onSortCreatedAsc={onSortCreatedAsc}
            onSortCreatedDesc={onSortCreatedDesc}
            onUpdatedDataBase={onUpdatedDataBase}
            students={students}
          />
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
