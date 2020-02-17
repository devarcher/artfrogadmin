import React from 'react';
import AddSection from './AddSection';
import SectionsCard from './SectionsCard';
import ButtonGroup from '../SingleComponents/ButtonGroupSections';
import SearchField from '../SingleComponents/SearchField';

// Material UI
import { Grid, CssBaseline } from '@material-ui/core';
const EditSections = props => {
  const {
    sections,
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
              sections={sections}
              query={query}
            />
          </Grid>

          <ButtonGroup
            onSortNameAsc={onSortNameAsc}
            onSortNameDesc={onSortNameDesc}
            onSortCreatedAsc={onSortCreatedAsc}
            onSortCreatedDesc={onSortCreatedDesc}
            sections={sections}
            onUpdatedDataBase={onUpdatedDataBase}
          />
          <Grid item align="center" xs={12} sm={10} md={8} lg={8} xl={8}>
            <AddSection onUpdatedDataBase={onUpdatedDataBase} />
            {sections.map(section => (
              <SectionsCard
                key={section.id}
                sections={section}
                onUpdatedDataBase={onUpdatedDataBase}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditSections;
