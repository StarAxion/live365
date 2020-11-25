import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import NavBar from './NavBar';
import AmFm from './am-fm/AmFm';
import Management from './management/Management';
import Audience from './audience/Audience';
import Licensing from './licensing/Licensing';
import Statistics from './statistics/Statistics';
import Monetization from './monetization/Monetization';
import Pricing from './pricing/Pricing';
import ColoredGradientBlock from '../ColoredGradientBlock';
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
  main: {
    background: '#ffffff',
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


      <main className={classes.main}>
        <NavBar />

        {window.location.href.endsWith('/am-fm') &&
          <AmFm />
        }
        {window.location.href.endsWith('/management') &&
          <Management />
        }
        {window.location.href.endsWith('/audience') &&
          <Audience />
        }
        {window.location.href.endsWith('/licensing') &&
          <Licensing />
        }
        {window.location.href.endsWith('/statistics') &&
          <Statistics />
        }
        {window.location.href.endsWith('/monetization') &&
          <Monetization />
        }
        {window.location.href.endsWith('/pricing') &&
          <Pricing />
        }

        <Box position="relative">
          {window.location.href.endsWith('/am-fm') &&
            <Hidden smDown>
              <ColoredGradientBlock
                size='75px'
                left='40px'
                bottom='383px'
                deg='169'
                startColor='#FF6740'
                startPoint='0%'
                endColor='#9E0022'
                endPoint='100%'
              />
              <ColoredGradientBlock
                size='110px'
                left='115px'
                bottom='272px'
                deg='207'
                startColor='#A83DAE'
                startPoint='0%'
                endColor='#3C1A96'
                endPoint='100%'
              />
            </Hidden>
          }
          {window.location.href.endsWith('/pricing') &&
            <Hidden smDown>
              <ColoredGradientBlock
                size='228px'
                left='-95px'
                bottom='175px'
                deg='162'
                startColor='#CC1919'
                startPoint='-20%'
                endColor='#CD761A'
                endPoint='80%'
              />
              <ColoredGradientBlock
                size='97px'
                left='133px'
                bottom='78px'
                deg='162'
                startColor='#FF2146'
                startPoint='-20%'
                endColor='#971590'
                endPoint='100%'
              />
            </Hidden>
          }
          <ContactPart textTransform="none" />
        </Box>
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
            Support
          </Link>
          <Link href="/">
            Addons
          </Link>
        </FooterSection>

        <FooterSection
          pr='60px'
          title={
            <Typography variant="h4" className={classes.footerSectionTitle}>
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
            <Typography variant="h4" className={classes.footerSectionTitle}>
              Company
            </Typography>
          }
        >
          <Link href="/">
            About
          </Link>
          <Link href="/">
            Blog
          </Link>
          <Link href="/">
            Jobs
          </Link>
        </FooterSection>
      </Footer>
    </>
  )
}

export default Broadcast;
