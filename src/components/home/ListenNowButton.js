import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '65px',
    padding: '0 40px',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#234bff',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const ListenNowButton = (props) => {
  const classes = useStyles();

  return (
    <Box
      mt={props.mt}
      mb={props.mb}
    >
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        href="/listen"
      >
        Listen now
      </Button>
    </Box>
  )
}

export default ListenNowButton;
