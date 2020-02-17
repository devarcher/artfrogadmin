import React from 'react';
import TeacherCard from './TeacherCard';
import AddTeacher from './AddTeacher';
import ButtonGroup from '../SingleComponents/ButtonGroup';
import SearchField from '../SingleComponents/SearchField';

// Material UI
import { Grid, CssBaseline } from '@material-ui/core';

const EditTeachers = props => {
  const {
    teachers,
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
              teachers={teachers}
              query={query}
            />
          </Grid>

          <ButtonGroup
            onSortNameAsc={onSortNameAsc}
            onSortNameDesc={onSortNameDesc}
            onSortCreatedAsc={onSortCreatedAsc}
            onSortCreatedDesc={onSortCreatedDesc}
          />
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
