import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  block: {
    position: 'absolute',
    borderRadius: '8px',
    zIndex: '1',
  },
}));

const ColoredGradientBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      width={props.size}
      height={props.size}
      left={props.left}
      right={props.right}
      top={props.top}
      bottom={props.bottom}
      className={classes.block}
      style={{
        background: `linear-gradient(${props.deg}deg, ${props.startColor} ${props.startPoint}, ${props.endColor} ${props.endPoint})`
      }}
    />
  )
}

export default ColoredGradientBlock;
