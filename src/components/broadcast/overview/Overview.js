import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../../Header';
import ButtonLink from '../../ButtonLink';
import TopPart from './TopPart';
import BlocksPart from './BlocksPart';
import InfoBlocksPart from './InfoBlocksPart';
import ImagesPart from './ImagesPart';
import ContactPart from '../ContactPart';
import Footer from '../../Footer';
import FooterSection from '../../FooterSection';

const useStyles = makeStyles((theme) => ({
  links: {
    display: 'flex',
    alignItems: 'center',
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
    textDecoration: 'none',
    color: 'inherit',
  },
  active: {
    paddingTop: theme.spacing(1),
    paddingBottom: '6px',
    borderBottom: 'solid 2px #ffffff',
  },
  menu: {
    display: 'inline-block',
  },
  menuButton: {
    marginLeft: '-10px',
    padding: '0 0 0 10px',
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    textTransform: 'none',
    color: 'inherit',
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  footerSectionTitle: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#94929B',
  },
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <>
      <Header ml={{ sm: 3, lg: 4 }}>
        <Hidden smDown>
          <Box className={classes.links}>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              exact to="/broadcast"
            >
              Overview
            </NavLink>

            <Box className={classes.menu}>
              <Button
                className={classes.menuButton}
              >
                Product tour
                <ExpandMoreIcon fontSize="large" className={classes.buttonIcon} />
              </Button>
            </Box>

            <Box className={classes.menu}>
              <Button
                className={classes.menuButton}
              >
                Live365 for...
                <ExpandMoreIcon fontSize="large" className={classes.buttonIcon} />
              </Button>
            </Box>

            <Link href="/broadcast/pricing" className={classes.link}>Pricing</Link>

            <Hidden mdDown>
              <ButtonLink
                margin='0 50px 0 0'
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
            </Hidden>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box className={classes.links}>
            <Link href="/listen" className={classes.link}>Listen</Link>
            <Link href="/broadcast" className={classes.link}>Broadcast</Link>
          </Box>
        </Hidden>
      </Header>

      <main>
        <TopPart />
        <BlocksPart />
        <InfoBlocksPart />
        <ImagesPart />
        <ContactPart textTransform="uppercase" />
      </main>

      <Footer
        containerPadding={{ xs: '48px 0 24px', lg: '48px 0' }}
        justifyFooterSections='flex-start'
        bottomPartDirection='column'
        copyrightOrder={1}
        ml={0}
        mb={1}
        linksOrder={2}
      >
        <FooterSection
          pr='60px'
          title={
            <Typography variant="h4" className={classes.footerSectionTitle}>
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
            <Typography variant="h4" className={classes.footerSectionTitle}>
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
            Podcasts
          </Link>
          <Link href="/">
            Support
          </Link>
        </FooterSection>

        <FooterSection
          pr='0'
          title={
            <Typography variant="h4" className={classes.footerSectionTitle}>
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

export default Overview;
