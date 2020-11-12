import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    height: '65px',
    padding: '0 40px',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#234bff',
    zIndex: '3',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const ListenNowButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      href="/listen"
    >
      Listen now
    </Button>
  )
}

export default ListenNowButton;
