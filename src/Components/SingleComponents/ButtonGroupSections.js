import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '15px'
  }
});

export default function SortButtons(props) {
  const classes = useStyles();
  const {
    onSortNameAsc,
    onSortNameDesc,
    onSortCreatedAsc,
    onSortCreatedDesc
  } = props;

  return (
    <div>
      <ButtonGroup className={classes.box} color="primary">
        <Button onClick={onSortNameAsc}>Class Name ↑</Button>
        <Button onClick={onSortNameDesc}>Class Date ↑</Button>
        <Button onClick={onSortCreatedAsc}>Created ↑</Button>
        <Button onClick={onSortCreatedDesc}>Created ↓</Button>
      </ButtonGroup>
    </div>
  );
}