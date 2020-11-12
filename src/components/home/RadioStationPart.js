import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TitlesBlock from '../TitlesBlock';
import InfoBlock from '../InfoBlock';
import StartStationButton from '../StartStationButton';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#06012e',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  leftHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '470px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '520px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '370px',
      marginRight: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '285px',
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      marginRight: 0,
    },
  },
  rightHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '555px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '290px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '285px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  button: {
    height: '60px',
    marginLeft: theme.spacing(2),
    padding: '20px 40px',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '.5px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#170954',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing(2),
    },
  },
}));

const RadioStationPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box display={{ xs: 'block', md: 'none' }}>
          <Box padding="65px 0">
            <Grid container justify="center" wrap="nowrap">
              <Grid item xs={12}>
                <Box mb="75px">
                  <TitlesBlock
                    title='Create your own internet radio station.'
                    subtitle='Listen to radio stations run by members of our community.'
                  />
                </Box>

                <Box mb={13}>
                  <InfoBlock
                    link='/'
                    color='#234bff'
                    icon='img/icons/audience.png'
                    title='Audience'
                    text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
                  />
                </Box>
                <Box mb={13}>
                  <InfoBlock
                    link='/'
                    color='#d13eeb'
                    icon='img/icons/licensing.png'
                    title='Licensing'
                    text='Music licensing coverage in the United States, United Kingdom, and Canada.'
                  />
                </Box>
                <Box>
                  <InfoBlock
                    link='/'
                    color='#9dde01'
                    icon='img/icons/monetization.png'
                    title='Monetization'
                    text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
                  />
                </Box>

                <Box mt="80px" textAlign="center">
                  <StartStationButton />
                  <Button variant="contained" color="primary" className={classes.button} href="/">
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>



        <Box display={{ xs: 'none', md: 'block' }}>
          <Box padding="115px 0 150px">
            <Grid container wrap="nowrap" className={classes.container}>
              <Grid item md={6} className={classes.leftHalf}>
                <Box mb="75px">
                  <TitlesBlock
                    title='Create your own internet radio station.'
                    subtitle='Listen to radio stations run by members of our community.'
                  />
                </Box>
                <Box mt="75px">
                  <StartStationButton />
                  <Button variant="contained" color="primary" className={classes.button} href="/">
                    Learn more
                  </Button>
                </Box>
              </Grid>

              <Grid item md={6} className={classes.rightHalf}>
                <Box mb={13}>
                  <InfoBlock
                    link='/broadcast/audience'
                    color='#234bff'
                    icon='img/icons/audience.png'
                    title='Audience'
                    text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
                  />
                </Box>
                <Box mb={13}>
                  <InfoBlock
                    link='/broadcast/licensing'
                    color='#d13eeb'
                    icon='img/icons/licensing.png'
                    title='Licensing'
                    text='Music licensing coverage in the United States, United Kingdom, and Canada.'
                  />
                </Box>
                <Box>
                  <InfoBlock
                    link='/broadcast/monetization'
                    color='#9dde01'
                    icon='img/icons/monetization.png'
                    title='Monetization'
                    text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container >
    </div >
  )
}

export default RadioStationPart;
