import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  subButton: {
    marginLeft: 5,
    height: 55
  }
}));

export default function SearchField(props) {
  const classes = useStyles();
  const { searchFieldText, query, onSearchSubmit } = props;

  return (
    <div>
      <Box className={classes.root} display="flex" align="center" width="75vw">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Query"
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.subButton}
          onClick={onSearchSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
