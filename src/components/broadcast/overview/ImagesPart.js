import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../../SectionIntro';
import ImageLink from '../../ImageLink';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#020104',
    background: '#D5D3D9',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '182px 0 210px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '155px 0 177px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '90px 0 128px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '65px 0 80px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '70px 0 57px',
    },
  },
  title: {
    fontSize: '65px',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
      textAlign: 'left',
    },
  },
  par: {
    lineHeight: '42px',
    fontSize: '28px',
    textAlign: 'left',
    [theme.breakpoints.down('lg')]: {
      lineHeight: '36px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '30px',
      fontSize: '20px',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '27px',
      fontSize: '18px',
      textAlign: 'left',
    },
  },
  imageBlock: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '225px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '170px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '168px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '225px',
    },
  },
}));

const ImagesPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width={{ xs: '100%', md: '782px', lg: '890px', xl: '895px' }}
            margin='auto'
            mbTitle={{ xs: '48px', lg: '68px', xl: '88px' }}
            title='Built for broadcasters.'
            titleClass={classes.title}
            mbPar={{ xs: '78px', md: '104px', lg: '132px', xl: '110px' }}
            par='Live365 has helped thousands of broadcasters get online since 1999. Learn more about how Live365 can work for your organization, business, or passion.'
            parClass={classes.par}
          />

          <Hidden mdUp>
            <Grid container justify="center">
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid container justify="center" wrap="nowrap">
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='../img/blues.png'
                />
              </Grid>
            </Grid>
          </Hidden>
        </Box>
      </Container>
    </section>
  )
}

export default ImagesPart;
