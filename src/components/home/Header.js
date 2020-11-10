import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    color: '#ffffff',
    background: '#010102',
  },
  logo: {
    maxWidth: '115px',
  },
  links: {
    letterSpacing: '1px',
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
    },
  },
  separator: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    fontSize: '28px',
    color: '#656565',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Grid container justify="center">
          <Grid item xs={12} xl={8}>
            <Toolbar>
              <Box flexGrow={1}>
                <Link href="/">
                  <img src="img/logo.png" alt="logo" className={classes.logo} />
                </Link>
              </Box>
              <Box className={classes.links}>
                <Link href="/listen" color="inherit">Listen</Link>
                <Link href="/broadcast" color="inherit">Broadcast</Link>
              </Box>
              <Box component="span" ml={4} className={classes.separator} display={{ xs: 'none', sm: 'block' }}>&#124;</Box>
              <Box className={classes.links} display={{ xs: 'none', sm: 'block' }}>
                <Link href="/signup" color="inherit">Sign up</Link>
                <Link href="/login" color="inherit">Log in</Link>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </header>
  )
}

export default Header;
