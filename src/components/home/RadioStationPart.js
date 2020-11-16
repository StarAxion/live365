import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TitlesBlock from '../TitlesBlock';
import InfoBlock from '../InfoBlock';
import ButtonLink from '../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#0F0732',
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
      minWidth: '500px',
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
              mbTitle={{ xs: '67px', sm: '88px' }}
              alignTitle='left'
              title='Create your own internet radio station.'
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
              <ButtonLink
                justify='center'
                margin='0'
                bg='#fd6316'
                color='secondary'
                link='/broadcast/am-fm'
              >
                Start a station
              </ButtonLink>
              <ButtonLink
                justify='center'
                margin={{ xs: '16px 0 0 0', sm: '0 0 0 16px' }}
                bg='#170954'
                color='primary'
                link='/'
              >
                Learn more
              </ButtonLink>
            </Box>
          </Box>



          <Box display={{ xs: 'none', md: 'block' }}>
            <Grid container wrap="nowrap" className={classes.innerContainer}>
              <Grid item md={6} className={classes.leftHalf}>
                <TitlesBlock
                  width={{ md: '322px', lg: '100%' }}
                  margin='0'
                  mbTitle={{ md: '80px', lg: '108px', xl: '140px' }}
                  alignTitle='left'
                  title='Create your own internet radio station.'
                />

                <Box display="flex">
                  <ButtonLink
                    justify='center'
                    margin='0'
                    bg='#fd6316'
                    color='secondary'
                    link='/broadcast/am-fm'
                  >
                    Start a station
                  </ButtonLink>
                  <ButtonLink
                    justify='center'
                    margin='0 0 0 16px'
                    bg='#170954'
                    color='primary'
                    link='/'
                  >
                    Learn more
                  </ButtonLink>
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
