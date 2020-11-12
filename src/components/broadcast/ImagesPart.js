import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';
import ImageLink from '../ImageLink';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#010101',
    background: '#faf9fc',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '185px 0 200px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '155px 0 165px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '90px 0 120px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '65px 0 72px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '70px 0 48px',
    },
  },
  subtitleBlock: {
    margin: '0 auto',
    textAlign: 'left',
    [theme.breakpoints.down('xl')]: {
      maxWidth: '895px',
      marginBottom: '95px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '890px',
      marginBottom: '118px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '782px',
      marginBottom: '90px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      marginBottom: '65px',
    },
  },
  imageBlock: {
    margin: theme.spacing(1),
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
    <div className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <TitlesBlock
            title='Built for broadcasters.'
          />
          <Box className={classes.subtitleBlock}>
            <TitlesBlock
              subtitle='Live365 has helped thousands of broadcasters get online since 1999. Leran more about how Live365 can work for your organization, business, or passion.'
            />
          </Box>

          <Box display={{ xs: 'block', md: 'none' }}>
            <Grid container justify="center">
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
            </Grid>
          </Box>

          <Box display={{ xs: 'none', md: 'block' }}>
            <Grid container justify="center" wrap="nowrap">
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
            </Grid>

            <Grid container justify="center" wrap="nowrap">
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
              <Grid item md={2} className={classes.imageBlock}>
                <ImageLink
                  link='/'
                  image='img/blues.png'
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div >
  )
}

export default ImagesPart;
