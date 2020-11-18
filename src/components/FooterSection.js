import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingBottom: '32px',
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(1.25),
      fontFamily: 'BarlowBold',
      fontSize: '18px',
      color: '#ffffff',
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
      },
    },
  },
}));

const FooterSection = (props) => {
  const classes = useStyles();

  return (
    <Box pr={props.pr} className={classes.section}>
      <Box mb={{ xs: '16px', sm: '23px' }}>
        {props.title}
      </Box>
      <Box className={classes.links}>
        {props.children}
      </Box>
    </Box>
  )
}

export default FooterSection;
