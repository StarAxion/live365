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
    position: 'relative',
    color: '#ffffff',
    background: 'rgba(5, 5, 6, 0.9)',
    zIndex: '3',
  },
  logo: {
    maxWidth: '114px',
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(3),
      },
    },
  },
  link: {
    fontFamily: 'BarlowBold!important',
    fontSize: '18px',
    color: 'inherit',
  },
  separator: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    fontSize: '29px',
    color: '#656565',
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Grid container justify="center">
          <Grid item xs={12} xl={8}>
            <Toolbar>
              <Box flexGrow={1}>
                <Link href="/">
                  <img src="../img/logo.png" alt="logo" className={classes.logo} />
                </Link>
              </Box>
              {props.children}
              <Box component="span" className={classes.separator} display={{ xs: 'none', sm: 'block' }}>&#124;</Box>
              <Box className={classes.links} display={{ xs: 'none', sm: 'block' }}>
                <Link href="/signup" className={classes.link}>Sign up</Link>
                <Link href="/login" className={classes.link}>Log in</Link>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </header>
  )
}

export default Header;
