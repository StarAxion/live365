import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';
import StartStationButton from '../StartStationButton';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#06012e',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '190px 0 350px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '145px 0 270px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '130px 0 230px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '75px 0 216px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '48px 0 225px',
    },
  },
  buttonBlock: {
    [theme.breakpoints.down('xl')]: {
      marginTop: '75px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '55px',
    },
  },
}));

const TopPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <Container fixed>
            <TitlesBlock
              title='The easiest way to build a fully-licensed online radio station.'
              subtitle='A complete solution to get your broadcasting legally in minutes.'
            />
            <Box className={classes.buttonBlock}>
              <StartStationButton />
            </Box>
          </Container>
        </div >
      </div>
    </div >
  )
}

export default TopPart;
