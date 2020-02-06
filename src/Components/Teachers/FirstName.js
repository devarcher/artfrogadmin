import React from 'react';

// Material UI
import {
  Typography,
  CssBaseline,
  Button,
  Box,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const FirstName = props => {
  const {
    teachers,
    isInEditMode,
    changeEditMode,
    onKeyUp,
    saveEditedText
  } = props;
  return (
    <>
      {isInEditMode ? (
        <>
          <Box
            p={1}
            display="flex"
            alignItems="center"
            borderBottom="1px solid grey"
          >
            <Box marginRight="10px">
              <Typography variant="h6">
                <strong>First Name: </strong>
              </Typography>
            </Box>
            <Box flexGrow={1} textAlign="left">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                onKeyUp={event => onKeyUp(event)}
                autoFocus={true}
                value={teachers.first_name}
              />
            </Box>
            <Box flexGrow={1} textAlign="right">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EditIcon />}
                onClick={changeEditMode}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box marginRight="10px">
            <Typography variant="h6">
              <strong>First Name: </strong>
            </Typography>
          </Box>
          <Box flexGrow={1} textAlign="left">
            <Typography variant="h6">{teachers.first_name}</Typography>
          </Box>
          <Box flexGrow={1} textAlign="right">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditIcon />}
              onClick={changeEditMode}
            >
              Edit
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default FirstName;
