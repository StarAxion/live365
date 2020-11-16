import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from '../../Header';
import TopPart from './TopPart';
import BlocksPart from './BlocksPart';
import InfoBlocksPart from './InfoBlocksPart';
import ImagesPart from './ImagesPart';
import ContactPart from '../ContactPart';
import Footer from '../../Footer';

const useStyles = makeStyles((theme) => ({
  links: {
    display: 'flex',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: '44px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
    },
  },
  link: {
    fontFamily: 'BarlowBold!important',
    fontSize: '18px',
    color: 'inherit',
  },
  active: {
    fontFamily: 'BarlowBold!important',
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
    fontSize: '20px',
    textTransform: 'none',
    background: '#fd631c',
    borderRadius: '4px',
  },
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <Box display={{ xs: 'none', md: 'block' }}>
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

            <Box display={{ md: 'none', lg: 'block' }}>
              <Button
                variant="contained"
                color="secondary"
                bgcolor="#fd6316"
                className={classes.headerButton}
                href="/"
              >
                Try it free
            </Button>
            </Box>
          </Box>
        </Box>

        <Box display={{ xs: 'block', md: 'none' }}>
          <Box className={classes.links}>
            <Link href="/listen" className={classes.link}>Listen</Link>
            <Link href="/broadcast" className={classes.link}>Broadcast</Link>
          </Box>
        </Box>
      </Header>

      <main>
        <TopPart />
        <BlocksPart />
        <InfoBlocksPart />
        <ImagesPart />
        <ContactPart textTransform="uppercase" />
      </main>

      <Footer />
    </>
  )
}

export default Overview;
