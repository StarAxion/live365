import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Header from '../Header';
import SearchPart from './SearchPart';
import GroovePart from './GroovePart';
import DevicesPart from './DevicesPart';
import RadioStationPart from './RadioStationPart';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  links: {
    fontFamily: 'BarlowBold!important',
    fontSize: '18px',
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
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header>
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

      <Footer />
    </>
  )
}

export default Home;
