import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

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
    width: '100vw'
  },
  button: {
    marginBottom: '15px',
    width: '240px'
  }
});

const SectionsCard = props => {
  const { sections, onUpdatedDataBase } = props;
  // console.log(sections);
  const classes = useStyles();

  // Edit State
  const [isInEditMode, setIsInEditMode] = useState(false);
  const toggleIsInEditMode = () => setIsInEditMode(!isInEditMode);

  // Local Section Info State
  const [section, setSection] = useState({
    class_id: sections.id,
    class_name: sections.section_name,
    description: sections.description,
    date: sections.date,
    start_time: sections.start_time,
    end_time: sections.end_time
  });

  const cancelHandler = e => {
    setSection({
      ...section,
      class_id: sections.id,
      class_name: sections.section_name,
      description: sections.description,
      date: sections.date,
      start_time: sections.start_time,
      end_time: sections.end_time
    });
    toggleIsInEditMode();
  };

  const saveHandler = e => {
    const data = {
      class_id: section.class_id,
      class_name: section.class_name,
      description: section.description,
      date: moment(section.date).format('YYYY-MM-DD'),
      start_time: section.start_time,
      end_time: section.end_time
    };
    const dataJSON = JSON.stringify(data);
    console.log('UPDATE SAVE: ', data);
    axios({
      method: 'put',
      url: 'http://localhost:80/classes',
      headers: {
        'Content-Type': 'application/json'
      },
      data: dataJSON
    })
      .then(function(response) {
        console.log(response);
        toggleIsInEditMode();
        onUpdatedDataBase();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const deleteHandler = e => {
    const data = {
      class_id: section.class_id
    };
    const dataJSON = JSON.stringify(data);
    // console.log(dataJSON);
    axios({
      method: 'delete',
      url: 'http://localhost:80/classes',
      headers: {
        'Content-Type': 'application/json'
      },
      data: dataJSON
    })
      .then(function(response) {
        console.log(response);
        onUpdatedDataBase();
      })
      .catch(function(error) {
        console.log(error);
      });
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
                {sections.section_name} || Start: {sections.date} || Time:{' '}
                {sections.start_time || 'None Given'}
              </Typography>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails display="flex">
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
                      <strong>Class Name: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Class Name"
                      variant="outlined"
                      autoFocus={true}
                      value={section.class_name}
                      onChange={e =>
                        setSection({ ...section, class_name: e.target.value })
                      }
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
                      <strong>Class Name: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {sections.section_name}
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
                >
                  <Box marginRight="10px">
                    <Typography variant="h6">
                      <strong>Description: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      multiline={true}
                      rows={3}
                      fullWidth={true}
                      label="Description"
                      variant="outlined"
                      value={section.description}
                      onChange={e =>
                        setSection({ ...section, description: e.target.value })
                      }
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
                      <strong>Description: </strong>
                    </Typography>
                  </Box>
                  <Box
                    flexGrow={1}
                    textAlign="left"
                    multiline={true}
                    rows={3}
                    fullWidth={true}
                  >
                    <Typography variant="h6">{sections.description}</Typography>
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
                      <strong>Start Date: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Date"
                      variant="outlined"
                      value={section.date}
                      onChange={e =>
                        setSection({ ...section, date: e.target.value })
                      }
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
                      <strong>Date: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{sections.date}</Typography>
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
                      <strong>Start Time: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Start Time"
                      variant="outlined"
                      value={section.start_time}
                      onChange={e =>
                        setSection({ ...section, start_time: e.target.value })
                      }
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
                      <strong>Start Time: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{sections.start_time}</Typography>
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
                      <strong>End Time: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="End Time"
                      variant="outlined"
                      value={section.end_time}
                      onChange={e =>
                        setSection({ ...section, end_time: e.target.value })
                      }
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
                      <strong>End Time: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{sections.end_time}</Typography>
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
                    onClick={e => cancelHandler(e)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<SaveAltIcon />}
                    onClick={saveHandler}
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
                    Delete {section.class_name}
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
                    onClick={deleteHandler}
                  >
                    Delete {section.class_name}
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

export default SectionsCard;
