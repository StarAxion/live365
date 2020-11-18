import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../../Header';
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
    color: 'inherit',
  },
  active: {
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1),
    color: 'inherit',
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
  headerButton: {
    height: '40px',
    marginRight: '50px',
    padding: '0 15px',
    fontFamily: 'BarlowSemiCondensedBold',
    fontSize: '20px',
    textTransform: 'none',
    background: '#fd631c',
    borderRadius: '4px',
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
            <Box component="span" className={classes.active}>Overview</Box>

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

            <Link href="/" className={classes.link}>Pricing</Link>

            <Hidden mdDown>
              <Button
                variant="contained"
                color="secondary"
                bgcolor="#fd6316"
                className={classes.headerButton}
                href="/"
              >
                Try it free
                </Button>
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
            Podcasts
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

export default Overview;
