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
    onSortCreatedDesc
  } = props;

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={onSortNameAsc}>Last Name ↑</Button>
        <Button onClick={onSortNameDesc}>Last Name ↓</Button>
        <Button onClick={onSortCreatedAsc}>Created ↑</Button>
        <Button onClick={onSortCreatedDesc}>Created ↓</Button>
      </ButtonGroup>
    </div>
  );
}
