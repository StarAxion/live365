import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../SectionIntro';
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
  title: {
    fontSize: '65px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  },
  par: {
    lineHeight: '42px',
    fontSize: '28px',
    [theme.breakpoints.down('lg')]: {
      lineHeight: '36px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '30px',
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '27px',
      fontSize: '18px',
      textAlign: 'left',
    },
  },
  bigBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '274px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '246px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '186px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '142px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '152px',
      maxWidth: '242px',
    },
  },
  smallBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '152px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '138px',
    },
  },
  wideBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '272px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '244px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '187px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '150px',
      maxWidth: '240px',
    },
  },
}));

const GroovePart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width={{ xs: '100%', sm: '412px', md: '100%' }}
            margin='auto'
            mbTitle={{ xs: '37px', sm: '42px', lg: '50px', xl: '75px' }}
            title='Find your groove.'
            titleClass={classes.title}
            mbPar={{ xs: '93px', sm: '72px', md: '93px', lg: '132px', xl: '164px' }}
            par='Explore thousands of unique stations for any genre of music or talk.'
            parClass={classes.par}
          />


          <Hidden smUp>
            <Grid container justify="center">
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item xs={6} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item xs={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xs={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xs={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
              <Grid item xs={6} className={classes.wideBlock}>
                <ImageLink link='/' image='img/blues.png' />
              </Grid>
            </Grid>
          </Hidden>


          <Hidden xsDown lgUp>
            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item sm={3} md={2} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
            </Grid>

            <Hidden mdUp>
              <Grid container justify="center" wrap="nowrap">
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
              </Grid>

              <Grid container justify="center" wrap="nowrap">
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={4} className={classes.wideBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
              </Grid>
            </Hidden>

            <Hidden smDown>
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
            </Hidden>
          </Hidden>


          <Hidden mdDown>
            <Grid container justify="center" wrap="nowrap">
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
              <Grid item lg={3} className={classes.bigBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='10px' />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
              </Grid>
              <Grid item lg={2} className={classes.smallBlock}>
                <ImageLink link='/' image='img/bcr.png' border='solid 1px #cecbd6' br='5px' />
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
          </Hidden>


          <Hidden lgDown>
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
          </Hidden>


          <ButtonLink
            margin={{ xs: '47px 0 0 0', sm: '75px 0 0 0', md: '95px 0 0 0', lg: '127px 0 0 0', xl: '153px 0 0 0' }}
            link='/listen'
            height='65px'
            padding='0 40px'
            fontFamily='BarlowBold'
            bg='#234bff'
            radius='5px'
          >
            Listen now
          </ButtonLink>
        </Box>
      </Container>
    </section>
  )
}

export default GroovePart;
