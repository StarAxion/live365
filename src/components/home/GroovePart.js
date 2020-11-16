import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';
import ImageLink from '../ImageLink';
import ButtonLink from '../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#020104',
    background: '#F0EFF3',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '178px 0 152px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '146px 0 120px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '95px 0',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '75px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '65px 0',
    },
  },
  bigBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '230px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '230px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '170px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '128px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '225px',
    },
  },
  smallBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '137px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '123px',
    },
  },
  wideBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '230px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '230px',
    },
  },
}));

const GroovePart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <TitlesBlock
            width={{ xs: '100%', sm: '412px', md: '100%' }}
            margin='auto'
            mbTitle={{ xs: '37px', sm: '42px', lg: '50px', xl: '75px' }}
            alignTitle='center'
            title='Find your groove.'
            mbSubitle={{ xs: '93px', sm: '72px', md: '93px', lg: '132px', xl: '164px' }}
            alignSubtitle={{ sm: 'left', md: 'center' }}
            subtitle='Explore thousands of unique stations for any genre of music or talk.'
          />


          <Box display={{ xs: 'block', sm: 'none' }}>
            <Grid container justify="center">
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
            </Grid>
          </Box>


          <Box display={{ xs: 'none', sm: 'block', lg: 'none' }}>
            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item sm={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item sm={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
            </Grid>
          </Box>


          <Box display={{ xs: 'none', lg: 'block' }}>
            <Grid container justify="center" wrap="nowrap">
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item lg={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item lg={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item lg={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item lg={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
            </Grid>
          </Box>


          <Box display={{ xs: 'none', xl: 'block' }}>
            <Grid container justify="center" wrap="nowrap">
              <Grid item xl={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xl={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xl={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xl={3} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
            </Grid>
          </Box>


          <ButtonLink
            justify='center'
            margin={{ xs: '47px 0 0 0', sm: '75px 0 0 0', md: '95px 0 0 0', lg: '127px 0 0 0', xl: '153px 0 0 0' }}
            bg='#234bff'
            color='primary'
            link='/listen'
          >
            Listen now
          </ButtonLink>
        </Box>
      </Container>
    </div>
  )
}

export default GroovePart;
