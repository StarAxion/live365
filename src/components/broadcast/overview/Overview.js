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
    fontWeight: 700,
    letterSpacing: '.5px',
    '& > * + *': {
      marginLeft: '45px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
    },
  },
  active: {
    display: 'inline-block',
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1),
    color: 'inherit',
    borderBottom: 'solid 2px #ffffff',
  },
  menu: {
    display: 'inline-block',
  },
  menuButton: {
    padding: 0,
    lineHeight: 0,
    fontSize: 'inherit',
    color: 'inherit',
    textTransform: 'none',
  },
  headerButton: {
    height: '40px',
    marginRight: '50px',
    padding: '0 15px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    background: '#fd6316',
  }
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
                endIcon={<ExpandMoreIcon />}
                className={classes.menuButton}
              >
                Product tour
            </Button>
            </Box>

            <Box className={classes.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                className={classes.menuButton}
              >
                Live365 for...
            </Button>
            </Box>

            <Link href="/" color="inherit">Pricing</Link>

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
            <Link href="/listen" color="inherit">Listen</Link>
            <Link href="/broadcast" color="inherit">Broadcast</Link>
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
