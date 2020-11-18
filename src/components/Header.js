import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    color: '#ffffff',
    background: 'rgba(5, 5, 6, 0.9)',
    zIndex: '3',
  },
  nav: {
    minHeight: '70px',
  },
  logo: {
    maxWidth: '114px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px',
    },
  },
  separator: {
    fontSize: '29px',
    color: '#656565',
  },
  link: {
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    color: 'inherit',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Grid container justify="center">
          <Grid item xs={12} xl={8}>
            <Toolbar className={classes.nav}>
              <Box flexGrow={1} display="flex" alignItems="center">
                <Link href="/">
                  <img src="../img/logo.png" alt="logo" className={classes.logo} />
                </Link>
              </Box>
              {props.children}
              <Hidden xsDown>
                <Box component="span" ml={props.ml} className={classes.separator}>&#124;</Box>
                <Box ml={props.ml}>
                  <Link href="/signup" className={classes.link}>Sign up</Link>
                </Box>
                <Box ml={props.ml}>
                  <Link href="/login" className={classes.link}>Log in</Link>
                </Box>
              </Hidden>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </header>
  )
}

export default Header;
