import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import SearchPart from './SearchPart';
import GroovePart from './GroovePart';
import DevicesPart from './DevicesPart';
import RadioStationPart from './RadioStationPart';
import Footer from '../Footer';
import FooterSection from '../FooterSection';

const useStyles = makeStyles((theme) => ({
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
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
  footerSectionTitle: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#94929B',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header ml={{ sm: 3, lg: 4 }}>
        <Box className={classes.links}>
          <Link href="/listen" className={classes.link}>Listen</Link>
          <Link href="/broadcast" className={classes.link}>Broadcast</Link>
        </Box>
      </Header>

      <main>
        <SearchPart />
        <GroovePart />
        <DevicesPart />
        <RadioStationPart />
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

export default Home;
