import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  }
}));

export default function SearchField(props) {
  const classes = useStyles();
  const { searchFieldText, query } = props;

  return (
    <div>
      <Box display="flex" width="70vw">
        <TextField
          fullWidth
          variant="outlined"
          className={classes.root}
          id="input-with-icon-textfield"
          label="Search"
          placeholder="Last Name"
          value={query}
          onChange={e => searchFieldText(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
    </div>
  );
}
