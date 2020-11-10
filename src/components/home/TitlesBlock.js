import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '56px',
    letterSpacing: '.5px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  subtitle: {
    marginTop: '60px',
    fontSize: '26px',
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
