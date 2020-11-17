import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  button: {
    width: 'inherit',
    height: '65px',
    padding: '0 40px',
    fontFamily: 'BarlowBold',
    fontSize: '20px',
    textTransform: 'none',
    color: '#ffffff',
    background: 'inherit',
  },
}));

const StartStationButton = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent={props.justify}>
      <Box
        margin={props.margin}
        bgcolor={props.bg}
        borderRadius="5px"
        className={classes.buttonContainer}
      >
        <Button
          variant="contained"
          color={props.color}
          className={classes.button}
          href={props.link}
        >
          {props.children}
        </Button>
      </Box>
    </Box>
  )
}

export default StartStationButton;
