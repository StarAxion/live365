import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    height: '60px',
    padding: '0 25px',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#fd6316',
    zIndex: '3',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const StartStationButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      href="/broadcast/am-fm"
    >
      Start a station
    </Button>
  )
}

export default StartStationButton;
