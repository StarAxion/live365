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

      <Footer />
    </>
  )
}

export default Home;
