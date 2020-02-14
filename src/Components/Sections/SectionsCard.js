import React, { useState } from 'react';
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
  console.log(sections)
  const classes = useStyles();

  // Edit State
  const [isInEditMode, setIsInEditMode] = useState(false);
  const toggleIsInEditMode = () => setIsInEditMode(!isInEditMode);

  // Local Teacher Info State
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
      class_id: section.id,
      class_name: section.section_name,
      description: section.description,
      date: section.date,
      start_time: section.start_time,
      end_time: section.end_time
    };
    const dataJSON = JSON.stringify(data);
    // console.log('UPDATE SAVE: ', data);
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
    const { id } = section;
    const data = {
      class_id: id
    };
    const dataJSON = JSON.stringify(data);

    axios({
      method: 'delete',
      url: 'http://localhost:80/clasess',
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

  // Able to map Inputs dynamically?
  // {Object.entries(student).map(([key, value]) => (
  //   <div key={student.id}></div>
  // ))}

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
                {sections.section_name} {sections.date} {sections.start_time}
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
                      label="First Name"
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

              {/* {isInEditMode ? (
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
                      value={student.last_name}
                      onChange={e =>
                        setSection({ ...student, last_name: e.target.value })
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
                      <strong>Last Name: </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{students.last_name}</Typography>
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
                      <strong>Guardian First: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="First Name"
                      variant="outlined"
                      value={student.guardian_first_name || ''}
                      onChange={e =>
                        setSection({
                          ...student,
                          guardian_first_name: e.target.value
                        })
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
                      <strong>Guardian First: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {students.guardian_first_name}
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
                      <strong>Guardian Last: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      value={student.guardian_last_name || ''}
                      onChange={e =>
                        setSection({
                          ...student,
                          guardian_last_name: e.target.value
                        })
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
                      <strong>Guardian Last: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {students.guardian_last_name}
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
                      <strong>Student DOB: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      variant="outlined"
                      type="date"
                      value={student.student_DOB || ''}
                      onChange={e =>
                        setSection({
                          ...student,
                          student_DOB: e.target.value
                        })
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
                      <strong>Student DOB: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.student_DOB}</Typography>
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
                      <strong>Phone: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Phone"
                      variant="outlined"
                      value={student.phone}
                      onChange={e =>
                        setSection({ ...student, phone: e.target.value })
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
                      <strong>Phone: </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{students.phone}</Typography>
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
                      <strong>Email: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Email"
                      variant="outlined"
                      value={student.email}
                      onChange={e =>
                        setSection({ ...student, email: e.target.value })
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
                      <strong>Email: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.email}</Typography>
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
                      <strong>Address: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Address"
                      variant="outlined"
                      value={student.address}
                      onChange={e =>
                        setSection({ ...student, address: e.target.value })
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
                      <strong>Address: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.address}</Typography>
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
                      <strong>City: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="City"
                      variant="outlined"
                      value={student.city}
                      onChange={e =>
                        setSection({ ...student, city: e.target.value })
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
                      <strong>City: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.city}</Typography>
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
                      <strong>State: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="State"
                      variant="outlined"
                      value={student.state}
                      onChange={e =>
                        setSection({ ...student, state: e.target.value })
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
                      <strong>State: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.state}</Typography>
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
                      <strong>Zip: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Zip"
                      variant="outlined"
                      value={student.zip}
                      onChange={e =>
                        setSection({ ...student, zip: e.target.value })
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
                      <strong>Zip: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.zip}</Typography>
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
                      <strong>Alt First: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Alt First"
                      variant="outlined"
                      value={student.alt_first_name}
                      onChange={e =>
                        setSection({
                          ...student,
                          alt_first_name: e.target.value
                        })
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
                      <strong>Alt First: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {students.alt_first_name}
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
                      <strong>Alt Last: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Alt Last"
                      variant="outlined"
                      value={student.alt_last_name}
                      onChange={e =>
                        setSection({
                          ...student,
                          alt_last_name: e.target.value
                        })
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
                      <strong>Alt Last: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {students.alt_last_name}
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
                      <strong>Alt Phone: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Alt Phone"
                      variant="outlined"
                      value={student.alt_phone}
                      onChange={e =>
                        setSection({
                          ...student,
                          alt_phone: e.target.value
                        })
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
                      <strong>Alt Phone: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">{students.alt_phone}</Typography>
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
                      <strong>Photo Perm: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <TextField
                      label="Photo Perm"
                      variant="outlined"
                      value={student.photo_permission}
                      onChange={e =>
                        setSection({
                          ...student,
                          photo_permission: e.target.value
                        })
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
                      <strong>Photo Perm: </strong>
                    </Typography>
                  </Box>
                  <Box flexGrow={1} textAlign="left">
                    <Typography variant="h6">
                      {students.photo_permission}
                    </Typography>
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
                    Delete {students.first_name} {students.last_name}
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
                    Delete {students.first_name} {students.last_name}
                  </Button>
                </Box>
              )} */}
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CssBaseline>
    </>
  );
};

export default SectionsCard;
