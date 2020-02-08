import React from 'react';
import {
  Typography,
  CssBaseline,
  Button,
  Box,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
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

const AddTeacher = props => {
  const { inputHandler } = props;

  const classes = useStyles();

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
              <Typography variant="h4">Add New Teacher</Typography>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form className={classes.form} noValidate autoComplete="off">
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
                    placeholder="First Name"
                    name="teachers.first_name"
                  />
                </Box>
              </Box>
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
              </Box>

              <Box padding={2}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  startIcon={<SaveAltIcon />}
                  className={classes.button}
                >
                  Save New Teacher
                </Button>
              </Box>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CssBaseline>
    </>
  );
};

export default AddTeacher;
