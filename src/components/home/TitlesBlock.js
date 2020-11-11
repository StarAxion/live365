import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    fontSize: '52px',
    letterSpacing: '.5px',
    zIndex: '3',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  subtitle: {
    position: 'relative',
    marginTop: '60px',
    fontFamily: 'BarlowThin!important',
    fontSize: '24px',
    zIndex: '3',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}));

const TitlesBlock = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" color="inherit" className={classes.title}>
        {props.title}
      </Typography>

      <Typography variant="h4" color="inherit" className={classes.subtitle}>
        {props.subtitle}
      </Typography>
    </div>
  )
}

export default TitlesBlock;
