import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ButtonLink from '../ButtonLink';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: 'fixed',
    width: '100%',
    marginTop: '70px',
    color: '#ffffff',
    background: 'rgba(15, 7, 50, 0.9)',
    zIndex: '3',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
    },
  },
  nav: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '23px 185px 17px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  navLink: {
    paddingBottom: '6px',
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 10px 4px',
    },
  },
  active: {
    borderBottom: 'solid 2px #ffffff',
  },
  buttonContainer: {
    position: 'absolute',
    top: '15px',
    right: 0,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.navContainer}>
      <Container fixed>
        <Box className={classes.nav}>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast"
          >
            Overview
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/management"
          >
            Management
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/audience"
          >
            Audience
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/licensing"
          >
            Licensing
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/statistics"
          >
            Statistics
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/monetization"
          >
            Monetization
            </NavLink>
          <NavLink
            className={classes.navLink} activeClassName={classes.active} exact to="/broadcast/pricing"
          >
            Pricing
            </NavLink>

          {!window.location.href.endsWith('/am-fm') && !window.location.href.endsWith('/pricing') &&
            <Hidden mdDown>
              <Box className={classes.buttonContainer}>
                <ButtonLink
                  margin='0'
                  color='secondary'
                  link='/'
                  height='40px'
                  padding='0 15px'
                  fontFamily='BarlowSemiCondensedBold'
                  bg='#FD631C'
                  radius='4px'
                >
                  Try it free
                  </ButtonLink>
              </Box>
            </Hidden>
          }
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar;
