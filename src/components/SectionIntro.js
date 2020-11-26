import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'BarlowBold',
    color: 'inherit',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left!important',
    },
  },
  par: {
    color: 'inherit',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left!important',
    },
  },
}));

const SectionIntro = (props) => {
  const classes = useStyles();

  return (
    <Box
      maxWidth={props.width}
      ml={props.margin}
      mr="auto"
    >
      <Box
        mb={props.mbTitle}
      >
        <Typography
          variant="h2"
          className={`${classes.title} ${props.titleClass}`}
        >
          {props.title}
        </Typography>
      </Box>

      <Box
        maxWidth={props.parWidth}
        mb={props.mbPar}
      >
        <Typography
          variant="body1"
          className={`${classes.par} ${props.parClass}`}
        >
          {props.par}
        </Typography>
      </Box>
    </Box >
  )
}

export default SectionIntro;
