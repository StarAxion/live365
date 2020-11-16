import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    fontFamily: 'BarlowBold!important',
    fontSize: '65px',
    color: 'inherit',
    zIndex: '3',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  subtitle: {
    position: 'relative',
    lineHeight: '42px',
    fontSize: '28px',
    color: 'inherit',
    zIndex: '3',
    [theme.breakpoints.down('lg')]: {
      lineHeight: '36px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '30px',
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '27px',
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}));

const TitlesBlock = (props) => {
  const classes = useStyles();

  return (
    <Box
      maxWidth={props.width}
      ml={props.margin}
      mr="auto"
    >
      <Box
        mb={props.mbTitle}
        textAlign={props.alignTitle}
      >
        <Typography
          variant="h2"
          className={classes.title}
        >
          {props.title}
        </Typography>
      </Box>

      <Box
        mb={props.mbSubitle}
        textAlign={props.alignSubtitle}
      >
        <Typography
          variant="h4"
          className={classes.subtitle}
        >
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default TitlesBlock;
