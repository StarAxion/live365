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
    letterSpacing: '1px',
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <Box className={classes.links}>
          <Link href="/listen" color="inherit">Listen</Link>
          <Link href="/broadcast" color="inherit">Broadcast</Link>
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
