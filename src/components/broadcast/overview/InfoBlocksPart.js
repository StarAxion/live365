import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../../SectionIntro';
import InfoBlock from '../../InfoBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#020104',
    background: '#F0EFF3',
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
  title: {
    fontSize: '65px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
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
      maxWidth: '100%',
    },
  },
  infoBlockTitle: {
    fontSize: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  infoBlockPar: {
    lineHeight: '30px',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '27px',
      fontSize: '18px',
    },
  },
}));

const InfoBlocksPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width='100%'
            margin='0'
            mbTitle={{ xs: '87px', md: '78px', lg: '132px', xl: '120px' }}
            title='Batteries included, and then some.'
            titleClass={classes.title}
          />

          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/management'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/management.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Management'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Manage your stations from our web-based dashboard to upload tracks, build playlists, and schedule your 24/7 automation.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/audience'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/audience.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Audience'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/licensing'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/licensing.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Licensing'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Music licensing coverage in the United States, United Kingdom, and Canada.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/statistics'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/statistics.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Statistics'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='See real-time and historical listening data to gain insight on what events drive engagement.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/broadcast/monetization'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/monetization.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Monetization'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.block}>
              <InfoBlock
                mb={{ xs: '75px', md: '95px', lg: '120px' }}
                link='/'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='../img/icons/compatibility.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Compatibility'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Bring your favorite Icecast encoder for plug-and-play live streaming. Or we can recommend a few.'
              />
            </Grid>
          </Grid>
        </Box>
      </Container >
    </section >
  )
}

export default InfoBlocksPart;
