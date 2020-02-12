import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default function SortButtons(props) {
  const classes = useStyles();
  const {
    onSortNameAsc,
    onSortNameDesc,
    onSortCreatedAsc,
    onSortCreatedDesc,
    students
  } = props;

  const emails = students.map(student => {
    return `${student.email}`;
  });

  console.log(emails);
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={onSortNameAsc}>Last Name ↑</Button>
        <Button onClick={onSortNameDesc}>Last Name ↓</Button>
        <Button onClick={onSortCreatedAsc}>Created ↑</Button>
        <Button onClick={onSortCreatedDesc}>Created ↓</Button>
        <Button>
          <a
            style={{ textDecoration: 'none', color: '#DC6866' }}
            href={`mailto:?bcc=${emails}`}
          >
            Email ALL
          </a>
        </Button>
      </ButtonGroup>
    </div>
  );
}
