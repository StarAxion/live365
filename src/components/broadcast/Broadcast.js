import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import ButtonLink from '../ButtonLink';
import ContactPart from './ContactPart';
import Footer from '../Footer';
import FooterSection from '../FooterSection';

const useStyles = makeStyles((theme) => ({
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(5.5),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(2),
      },
    },
  },
  link: {
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    color: 'inherit',
  },
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
  footerSectionTitle: {
    fontSize: '18px',
    color: '#ffffff',
  },
}));

const Broadcast = () => {
  const classes = useStyles();

  return (
    <>
      <Header ml={{ sm: 3, md: 4.5, lg: 5.5 }}>
        <Box className={classes.links}>
          <Link href="/listen" className={classes.link}>Listen</Link>
          <Link href="/broadcast" className={classes.link}>Broadcast</Link>
        </Box>
      </Header>

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

      <main>
        {window.location.href.endsWith('/am-fm') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              AM/FM
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/management') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Management
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/audience') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Audience
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/licensing') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Licensing
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/statistics') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Statistics
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/monetization') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Monetization
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/pricing') &&
          <Box padding="170px 0 30px" textAlign="center">
            <Typography
              variant="h1"
              color="secondary"
            >
              Pricing
            </Typography>
          </Box>
        }
        <ContactPart />
      </main>

      <Footer
        containerPadding='75px 0 85px'
        justifyFooterSections='flex-end'
        bottomPartDirection={{ xs: 'column', sm: 'row' }}
        copyrightOrder={{ xs: 1, sm: 2 }}
        ml={{ xs: 0, sm: 2 }}
        mb={{ xs: 1, sm: 0 }}
        linksOrder={{ xs: 2, sm: 1 }}
      >
        <FooterSection
          pr='60px'
          title={
            <Typography variant="h6" className={classes.footerSectionTitle}>
              Listeners
            </Typography>
          }
        >
          <Link href="/">
            Where to Listen
          </Link>
          <Link href="/">
            Support
          </Link>
        </FooterSection>

        <FooterSection
          pr='60px'
          title={
            <Typography variant="h6" className={classes.footerSectionTitle}>
              Broadcasters
            </Typography>
          }
        >
          <Link href="/">
            Start a Station
          </Link>
          <Link href="/">
            Resources
          </Link>
          <Link href="/">
            Support
          </Link>
          <Link href="/">
            Addons
          </Link>
        </FooterSection>

        <FooterSection
          pr='60px'
          title={
            <Typography variant="h6" className={classes.footerSectionTitle}>
              Podcasters
            </Typography>
          }
        >
          <Link href="/">
            Start a Podcast
          </Link>
          <Link href="/">
            Support
          </Link>
        </FooterSection>

        <FooterSection
          pr='0'
          title={
            <Typography variant="h6" className={classes.footerSectionTitle}>
              Company
            </Typography>
          }
        >
          <Link href="/" className={classes.footerSectionLink}>
            About
          </Link>
          <Link href="/" className={classes.footerSectionLink}>
            Blog
          </Link>
          <Link href="/" className={classes.footerSectionLink}>
            Jobs
          </Link>
        </FooterSection>
      </Footer>
    </>
  )
}

export default Broadcast;
