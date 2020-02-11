import React from 'react';
import BoardCard from './BoardCard';
import AddMember from './AddMember';

// Material UI
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const EditBoard = props => {
  const { board, onUpdatedDataBase } = props;

  return (
    <div>
      <CssBaseline>
        <Grid container display="flex" direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h3">Edit Board</Typography>
          </Grid>

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
