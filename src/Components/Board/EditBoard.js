import React from 'react';
import BoardCard from './BoardCard';
import AddMember from './AddMember';
import ButtonGroup from '../SingleComponents/ButtonGroup';
import SearchField from '../SingleComponents/SearchField';

// Material UI
import { Grid, CssBaseline } from '@material-ui/core';

const EditBoard = props => {
  const {
    board,
    onUpdatedDataBase,
    onSortNameAsc,
    onSortNameDesc,
    onSortCreatedAsc,
    onSortCreatedDesc,
    searchFieldText,
    query,
    onSearchSubmit
  } = props;

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column" alignItems="center">
          <SearchField
            searchFieldText={searchFieldText}
            board={board}
            query={query}
            onSearchSubmit={onSearchSubmit}
          />

          <ButtonGroup
            onSortNameAsc={onSortNameAsc}
            onSortNameDesc={onSortNameDesc}
            onSortCreatedAsc={onSortCreatedAsc}
            onSortCreatedDesc={onSortCreatedDesc}
            onUpdatedDataBase={onUpdatedDataBase}
          />

          <Grid item align="center" xs={12} sm={10} md={8} lg={8} xl={8}>
            <AddMember onUpdatedDataBase={onUpdatedDataBase} />
            {board.map(member => (
              <BoardCard
                key={member.id}
                board={member}
                onUpdatedDataBase={onUpdatedDataBase}
              />
            ))}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default EditBoard;
