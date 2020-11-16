import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  block: {
    background: '#e2e1e7',
    borderRadius: '5px',
  },
  link: {
    display: 'block',
    width: 'inherit',
    height: 'inherit',
  },
  container: {
    display: 'flex',
  },
  number: {
    lineHeight: '50px',
    fontFamily: 'BarlowExtraBold!important',
    fontSize: '58px',
    color: '#FD631C',
  },
  text: {
    fontSize: '18px',
  },
}));

const NumberedBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      flexDirection="column"
      width={props.containerWidth}
      margin="0 auto"
    >
      <Box
        width={props.size}
        height={props.size}
        ml={props.ml}
        mb={props.mb}
        className={classes.block}
        alignSelf={props.align}
      >
        <Link to='/' className={classes.link} />
      </Box>

      <Box
        width={props.containerWidth}
        textAlign="left"
        className={classes.container}
      >
        <Box minWidth={props.numberWidth} className={classes.number}>
          {props.number}
        </Box>
        <Typography variant="body1" className={classes.text}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default NumberedBlock;
