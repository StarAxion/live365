import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TitlesBlock from './TitlesBlock';
import InfoBlock from '../InfoBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#06012e',
  },
  leftHalf: {
    paddingRight: '75px',
    [theme.breakpoints.down('lg')]: {
      paddingRight: '40px',
    },
  },
  rightHalf: {
    paddingLeft: '75px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '40px',
    },
  },
  button: {
    padding: '20px 40px',
    lineHeight: '18px',
    fontSize: '16px',
    textTransform: 'none',
    color: '#ffffff',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  startButton: {
    marginRight: theme.spacing(2),
    background: '#fd6316',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  learnButton: {
    background: '#170954',
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
                  <Button variant="contained" color="secondary" bgcolor="#fd6316" className={`${classes.button} ${classes.startButton}`} href="/">
                    Start a station
                  </Button>
                  <Button variant="contained" color="primary" bgcolor="#170954" className={`${classes.button} ${classes.learnButton}`} href="/">
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>



        <Box display={{ xs: 'none', md: 'block' }}>
          <Box padding="115px 0 150px">
            <Grid container justify="center" wrap="nowrap">
              <Grid item md={6} className={classes.leftHalf}>
                <Box mb="75px">
                  <TitlesBlock
                    title='Create your own internet radio station.'
                    subtitle='Listen to radio stations run by members of our community.'
                  />
                </Box>
                <Box mt="75px">
                  <Button variant="contained" color="secondary" bgcolor="#fd6316" className={`${classes.button} ${classes.startButton}`} href="/">
                    Start a station
                  </Button>
                  <Button variant="contained" color="primary" bgcolor="#170954" className={`${classes.button} ${classes.learnButton}`} href="/">
                    Learn more
                  </Button>
                </Box>
              </Grid>

              <Grid item md={6} className={classes.rightHalf}>
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
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container >
    </div >
  )
}

export default RadioStationPart;
