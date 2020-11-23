import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '20px',
    textTransform: 'none',
    color: '#ffffff',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const StartStationButton = (props) => {
  const classes = useStyles();

  return (
    <Box
      margin={props.margin}
    >
      <Button
        variant="contained"
        href={props.link}
        className={classes.button}
        style={{
          height: `${props.height}`,
          padding: `${props.padding}`,
          fontFamily: `${props.fontFamily}`,
          background: `${props.bg}`,
          borderRadius: `${props.radius}`
        }}
      >
        {props.children}
      </Button>
    </Box>
  )
}

export default StartStationButton;
