import React from 'react';
import {
  Typography,
  CssBaseline,
  Card,
  Grid,
  Button,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  const { teachers, isInEditMode } = props;
  const classes = useStyles();

  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            className={classes.cardTitle}
            bgcolor="#BA829F"
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
                >
                  Edit
                </Button>
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
                >
                  Edit
                </Button>
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
                >
                  Edit
                </Button>
              </Box>
            </Box>
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

      {/* <CssBaseline>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <form className={classes.form} noValidate autoComplete="off">
              <Box
                className={classes.cardTitle}
                bgcolor="#BA829F"
                borderRadius="8px"
              >
                <Typography variant="h4">
                  {teachers.first_name} {teachers.last_name}
                </Typography>
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
                  <Typography variant="h6">{teachers.first_name}</Typography>
                </Box>
                <Box flexGrow={1} textAlign="right">
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
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
                  >
                    Edit
                  </Button>
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
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
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
          </Card>
        </Grid>
      </CssBaseline> */}
    </>
  );
};

export default TeacherCard;
