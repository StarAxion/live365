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
  outerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '113px 0 153px',
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '110px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '106px 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '92px 0 80px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '65px 0',
    },
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
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
      maxWidth: '450px',
    },
  },
  rightHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '555px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '288px',
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
        <Box className={classes.outerContainer}>
          <Box display={{ xs: 'block', md: 'none' }}>
            <TitlesBlock
              width='100%'
              margin='0'
              mbTitle={{ xs: '35px', sm: '48px' }}
              alignTitle='left'
              title='Create your own internet radio station.'
              mbSubitle={{ xs: '70px', sm: '95px' }}
              alignSubtitle='left'
              subtitle='Listen to radio stations run by members of our community.'
            />

            <Box maxWidth={{ sm: '290px' }}>
              <InfoBlock
                mb={{ xs: '55px', sm: '30px' }}
                link='/'
                icon='img/icons/audience.png'
                title='Audience'
                text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
              />
              <InfoBlock
                mb={{ xs: '55px', sm: '30px' }}
                link='/'
                icon='img/icons/licensing.png'
                title='Licensing'
                text='Music licensing coverage in the United States, United Kingdom, and Canada.'
              />
              <InfoBlock
                mb='0'
                link='/'
                icon='img/icons/monetization.png'
                title='Monetization'
                text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
              />
            </Box>

            <Box
              display={{ sm: 'flex' }}
              justifyContent='center'
              mt={{ xs: '165px', sm: '78px!important' }}
            >
              <StartStationButton
                mt='0'
                mb='0'
              />
              <Button variant="contained" color="primary" className={classes.button} href="/">
                Learn more
              </Button>
            </Box>
          </Box>



          <Box display={{ xs: 'none', md: 'block' }}>
            <Grid container wrap="nowrap" className={classes.innerContainer}>
              <Grid item md={6} className={classes.leftHalf}>
                <TitlesBlock
                  width={{ md: '322px', lg: '100%' }}
                  margin='0'
                  mbTitle={{ md: '44px', lg: '60px', xl: '76px' }}
                  alignTitle='left'
                  title='Create your own internet radio station.'
                  mbSubitle={{ md: '88px', lg: '118px', xl: '152px' }}
                  alignSubtitle='left'
                  subtitle='Listen to radio stations run by members of our community.'
                />

                <Box display="flex">
                  <StartStationButton
                    mt='0'
                    mb='0'
                  />
                  <Button variant="contained" color="primary" className={classes.button} href="/">
                    Learn more
                  </Button>
                </Box>
              </Grid>


              <Grid item md={6} className={classes.rightHalf}>
                <InfoBlock
                  mb={{ md: '30px', lg: '98px' }}
                  link='/broadcast/audience'
                  icon='img/icons/audience.png'
                  title='Audience'
                  text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
                />
                <InfoBlock
                  mb={{ md: '30px', lg: '98px' }}
                  link='/broadcast/licensing'
                  icon='img/icons/licensing.png'
                  title='Licensing'
                  text='Music licensing coverage in the United States, United Kingdom, and Canada.'
                />
                <InfoBlock
                  mb='0'
                  link='/broadcast/monetization'
                  icon='img/icons/monetization.png'
                  title='Monetization'
                  text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div >
  )
}

export default RadioStationPart;
