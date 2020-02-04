import React from 'react';
import {
  Typography,
  CssBaseline,
  Card,
  Grid,
  Button,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    marginBottom: '10px'
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
      <CssBaseline>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <form className={classes.form} noValidate autoComplete="off">
              <Box
                p={1}
                display="flex"
                alignItems="center"
                borderBottom="1px solid grey"
              >
                <Box marginRight="10px">
                  <Typography container="h3" variant="body1">
                    <strong>First Name: </strong>
                  </Typography>
                </Box>
                <Box flexGrow={1} textAlign="left">
                  <Typography>{teachers.first_name}</Typography>
                </Box>
                <Box flexGrow={1} textAlign="right">
                  <Button variant="contained" color="primary">
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
                  <Typography container="h3" variant="body1">
                    <strong>Last Name: </strong>
                  </Typography>
                </Box>
                <Box>
                  <Typography flexGrow={1} textAlign="left">
                    {teachers.last_name}
                  </Typography>
                </Box>
                <Box flexGrow={1} textAlign="right">
                  <Button variant="contained" color="primary">
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
                  <Typography container="h3" variant="body1">
                    <strong>Bio: </strong>
                  </Typography>
                </Box>
                <Box flexGrow={1} textAlign="left" padding={2}>
                  <Typography>{teachers.bio}</Typography>
                </Box>
                <Box flexGrow={1} textAlign="right">
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </Box>
              </Box>
              <Box padding={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.deleteButton}
                >
                  Delete {teachers.first_name} {teachers.last_name}
                </Button>
              </Box>
            </form>
          </Card>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default TeacherCard;
