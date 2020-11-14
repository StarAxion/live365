import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TitlesBlock from '../../TitlesBlock';
import InfoBlock from '../../InfoBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#010101',
    background: '#fefeff',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '202px 0 258px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '140px 0 205px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '95px 0 50px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '75px 0 95px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '70px 0 47px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  block: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '350px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '285px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
}));

const InfoBlocksPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <TitlesBlock
            width='100%'
            margin='0'
            mbTitle={{ xs: '87px', md: '78px', lg: '132px', xl: '120px' }}
            alignTitle={{ sm: 'left', lg: 'center!important' }}
            title='Batteries included, and then some.'
          />

          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/'
                color='#fd6d28'
                icon='img/icons/management.png'
                title='Management'
                text='Manage your stations from our web-based dashboard to upload tracks, build playlists, and schedule your 24/7 automation.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/audience'
                color='#4e6cff'
                icon='img/icons/audience.png'
                title='Audience'
                text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/licensing'
                color='#d13eeb'
                icon='img/icons/licensing.png'
                title='Licensing'
                text='Music licensing coverage in the United States, United Kingdom, and Canada.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/statistics'
                color='#0edbee'
                icon='img/icons/statistics.png'
                title='Statistics'
                text='See real-time and historical listening data to gain insight on what events drive engagement.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/monetization'
                color='#9dde01'
                icon='img/icons/monetization.png'
                title='Monetization'
                text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/'
                color='#ffe309'
                icon='img/icons/compatibility.png'
                title='Compatibility'
                text='Bring your favorite Icecast encoder for plug-and-play live streaming. Or we can recommend a few.'
              />
            </Grid>
          </Grid>
        </Box>
      </Container >
    </div >
  )
}

export default InfoBlocksPart;
