import React, { useState } from 'react';
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    marginBottom: '45px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const TeacherCard = props => {
  const { teachers, saveEditedText, inputHandler } = props;

  const classes = useStyles();

  const [isInEditMode, setIsInEditMode] = useState(false);
  const toggleEditMode = () => setIsInEditMode(!isInEditMode);

  const onKeyUp = event => {
    if (event.keyCode === 27)
      // 'ESC' key
      toggleEditMode();
  };

  return (
    <>
      <CssBaseline>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              className={classes.cardTitle}
              bgcolor="rgba(186, 130, 159, .2)"
              borderRadius="8px"
              padding={3}
              display="flex"
              justifyContent="center"
              flexGrow={1}
            >
              <Typography variant="h4">
                {teachers.first_name} {teachers.last_name}
              </Typography>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form className={classes.form} noValidate autoComplete="off">
              {isInEditMode ? (
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
                      onChange={e => inputHandler(e)}
                      onKeyUp={event => onKeyUp(event)}
                      autoFocus={true}
                      value={teachers.first_name}
                      name="teachers.first_name"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              ) : (
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
                    <Typography variant="h6">{teachers.first_name}</Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              )}

              {isInEditMode ? (
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
                      label="Last Name"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      onKeyUp={event => onKeyUp(event)}
                      autoFocus={true}
                      value={teachers.last_name}
                      name="teachers.last_name"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderBottom="1px solid grey"
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Last Name: </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" flexGrow={1} textAlign="left">
                      {teachers.last_name}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              )}

              {isInEditMode ? (
                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderBottom="1px solid grey"
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Bio: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      multiline={true}
                      id="outlined-basic"
                      label="Bio"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      onKeyUp={event => onKeyUp(event)}
                      autoFocus={true}
                      value={teachers.bio}
                      name="teachers.bio"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderBottom="1px solid grey"
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Bio: </strong>
                    </Typography>
                  </Box>
                  <Box variant="h6" flexGrow={1} textAlign="left" padding={4}>
                    <Typography>{teachers.bio}</Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={toggleEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              )}
              <Box padding={2}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  className={classes.deleteButton}
                >
                  Delete {teachers.first_name} {teachers.last_name}
                </Button>
              </Box>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CssBaseline>
    </>
  );
};

export default TeacherCard;
