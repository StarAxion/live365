import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%',
  },
}));

const BlackCospelRadio = (props) => {
  const classes = useStyles();

  return (
    <Box maxWidth={props.width}>
      <Link to="/">
        <img src="img/bcr.png" alt="black-cospel-radio" className={classes.image} />
      </Link>
    </Box>
  )
}

export default BlackCospelRadio;
