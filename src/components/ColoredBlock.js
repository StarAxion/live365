import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  block: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    zIndex: '1',
  },
}));

const ColoredBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
      width={props.size}
      height={props.size}
      bgcolor={props.color}
      className={classes.block}
    >
      {props.children}
    </Box>
  )
}

export default ColoredBlock;
