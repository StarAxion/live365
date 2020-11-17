import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
  block: {
    background: '#E1E0E6',
    borderRadius: '5px',
  },
  link: {
    display: 'block',
    width: 'inherit',
    height: 'inherit',
  },
  number: {
    lineHeight: '55px',
    fontFamily: 'BarlowExtraBold',
    fontSize: '65px',
    color: '#FD631C',
  },
  text: {
    lineHeight: '32px',
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '26px',
      fontSize: '20px',
    },
  },
}));

const NumberedBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      maxWidth={props.containerWidth}
      className={classes.container}
    >
      <Box
        width={props.size}
        height={props.size}
        mb={props.mb}
        className={classes.block}
        alignSelf={props.align}
      >
        <Link to='/' className={classes.link} />
      </Box>

      <Box
        display="flex"
        textAlign="left"
      >
        <Box minWidth={props.numberWidth}>
          <Typography
            variant="h3"
            className={classes.number}
          >
            {props.number}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          className={classes.text}
        >
          {props.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default NumberedBlock;
