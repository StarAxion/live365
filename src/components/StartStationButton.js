import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '60px',
    padding: '0 25px',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#fd6316',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const StartStationButton = (props) => {
  const classes = useStyles();

  return (
    <Box
      mt={props.mt}
      mb={props.mb}
    >
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        href="/broadcast/am-fm"
      >
        Start a station
      </Button>
    </Box>
  )
}

export default StartStationButton;
