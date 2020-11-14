import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    fontSize: '46px',
    letterSpacing: '.5px',
    zIndex: '3',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  subtitle: {
    position: 'relative',
    lineHeight: '34px',
    fontFamily: 'BarlowThin!important',
    fontSize: '22px',
    zIndex: '3',
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
          color="inherit"
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
          color="inherit"
          className={classes.subtitle}
        >
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default TitlesBlock;
