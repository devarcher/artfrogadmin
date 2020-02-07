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
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
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
  },
  bioSection: {
    width: '85vw'
  },
  cancelButton: {
    marginRight: '15px'
  },
  bioButton: {
    width: '100px',
    marginBottom: '5px'
  }
});

const TeacherCard = props => {
  const { teachers, saveEditedText, inputHandler } = props;

  const classes = useStyles();

  // First Name State
  const [FirstNameEditMode, setFirstNameEditMode] = useState(false);
  const toggleFirstNameEditMode = () =>
    setFirstNameEditMode(!FirstNameEditMode);

  // Last Name State
  const [lastNameEditMode, setLastNameEditMode] = useState(false);
  const toggleLastNameEditMode = () => setLastNameEditMode(!lastNameEditMode);

  // Bio State
  const [bioEditMode, setBioEditMode] = useState(false);
  const toggleBioEditMode = () => setBioEditMode(!bioEditMode);

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
              {FirstNameEditMode ? (
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
                      label="First Name"
                      variant="outlined"
                      autoFocus={true}
                      placeholder={teachers.first_name}
                      name="teachers.first_name"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<CancelOutlinedIcon />}
                      onClick={toggleFirstNameEditMode}
                      className={classes.cancelButton}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<SaveAltIcon />}
                      onClick={toggleFirstNameEditMode}
                    >
                      Save
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
                      onClick={toggleFirstNameEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              )}

              {lastNameEditMode ? (
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
                      label="Last Name"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      autoFocus={true}
                      name="teachers.last_name"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.cancelButton}
                      startIcon={<CancelOutlinedIcon />}
                      onClick={toggleLastNameEditMode}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<SaveAltIcon />}
                      onClick={toggleLastNameEditMode}
                    >
                      Save
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
                      onClick={toggleLastNameEditMode}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              )}

              {bioEditMode ? (
                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderBottom="1px solid grey"
                  className={classes.bioBox}
                  flexGrow={1}
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Bio: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      multiline={true}
                      rows={3}
                      fullWidth
                      className={classes.bioSection}
                      label="Bio"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      autoFocus={true}
                      name="teachers.bio"
                    />
                  </Box>
                  <Box flexGrow={1} textAlign="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.bioButton}
                      startIcon={<CancelOutlinedIcon />}
                      onClick={toggleBioEditMode}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.bioButton}
                      startIcon={<SaveAltIcon />}
                      onClick={toggleBioEditMode}
                    >
                      Save
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
                      onClick={toggleBioEditMode}
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
