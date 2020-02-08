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

const useStyles = makeStyles({
  form: {
    width: '100%'
  },
  button: {
    marginBottom: '15px',
    width: '240px'
  }
});

const TeacherCard = props => {
  const { teachers, inputHandler } = props;

  const classes = useStyles();

  // state = {
  // isInEditMode: false,
  // firstName: '',
  // lastName: '',
  // bio: ''
  // }
  // onInputChange  = (e) => {
  //
  // }

  // function changeInitialState(){

  //   const INITIAL_STATE = {
  //      foo: '',
  //      bar: '',
  //      something: {
  //        name: 0
  //      }
  //   }

  //  const [state, setState] = useState({...INITIAL_STATE})

  //  return <button onClick={() => {
  //      INITIAL_STATE.something.name = 'hello';
  //      console.log(state.something.name) // you will see the name has been updated as well
  //   }}></button>

  // }

  // const [teacherInfo, onInputChange] = useState({firstName: '', lastName: '', bio: ''})
  // teacherInfo.firstName

  // Edit State
  const [isInEditMode, setIsInEditMode] = useState(false);
  const toggleIsInEditMode = () => setIsInEditMode(!isInEditMode);

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
          <ExpansionPanelDetails display="flex" justifyItems="center">
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
                      label="First Name"
                      variant="outlined"
                      autoFocus={true}
                      placeholder={teachers.first_name}
                      name="teachers.first_name"
                    />
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
                      label="Last Name"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      autoFocus={true}
                      name="teachers.last_name"
                    />
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
                </Box>
              )}

              {isInEditMode ? (
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
                      fullWidth={true}
                      className={classes.bioSection}
                      label="Bio"
                      variant="outlined"
                      onChange={e => inputHandler(e)}
                      autoFocus={true}
                      name="teachers.bio"
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  p={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  borderBottom="1px solid grey"
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Bio: </strong>
                    </Typography>
                  </Box>
                  <Box variant="h6" flexGrow={1} textAlign="left" padding={1}>
                    <Typography>{teachers.bio}</Typography>
                  </Box>
                </Box>
              )}
              {isInEditMode ? (
                <Box padding={2} display="flex" flexDirection="column">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<CancelOutlinedIcon />}
                    onClick={toggleIsInEditMode}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<SaveAltIcon />}
                    onClick={toggleIsInEditMode}
                  >
                    Save
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    className={classes.button}
                  >
                    Delete {teachers.first_name} {teachers.last_name}
                  </Button>
                </Box>
              ) : (
                <Box padding={2} display="flex" flexDirection="column">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                    onClick={toggleIsInEditMode}
                  >
                    Edit
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    className={classes.button}
                  >
                    Delete {teachers.first_name} {teachers.last_name}
                  </Button>
                </Box>
              )}
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CssBaseline>
    </>
  );
};

export default TeacherCard;
