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
    color: '#0F0732',
    background: '#ffffff',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '100px 0 174px',
    },
  },
  title: {
    fontSize: '54px',
  },
  par: {
    lineHeight: '36px',
    fontSize: '24px',
  },
  imageBlock: {
    [theme.breakpoints.down('xl')]: {
      minWidth: '240px',
      margin: '3px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '184px',
      margin: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '150px',
      maxWidth: '240px',
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
            width='919px'
            margin='auto'
            mbTitle='49px'
            title='Need something different?'
            titleClass={classes.title}
            mbPar='127px'
            par='Live365 has helped thousands of broadcasters get online since 1999. We offer customized packages to fit the unique needs of our broadcasters.'
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
