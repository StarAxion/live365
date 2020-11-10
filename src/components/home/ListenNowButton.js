import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '20px 40px',
    lineHeight: '18px',
    fontSize: '16px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#234bff',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const ListenNowButton = () => {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.button} href="/listen">Listen now</Button>
  )
}

export default ListenNowButton;
