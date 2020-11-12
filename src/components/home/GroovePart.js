import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';
import ImageLink from '../ImageLink';
import ListenNowButton from './ListenNowButton';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#010101',
    background: '#faf9fc',
  },
  bigBlock: {
    margin: theme.spacing(.8),
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
  smallBlock: {
    maxWidth: '135px',
    margin: theme.spacing(.8),
  },
}));

const GroovePart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box padding="175px 0 150px">
          <TitlesBlock
            title='Find your groove.'
            subtitle='Explore thousands of unique stations for any genre of music or talk.'
          />
          <Box mt="155px">

            <Box display={{ xs: 'block', sm: 'none' }}>
              <Grid container justify="center" wrap="nowrap">
                <Grid item xs={6} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/bcr.png' />
                </Grid>
                <Grid item xs={6} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/bcr.png' />
                </Grid>
              </Grid>

              <Grid container justify="center" wrap="nowrap">
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
                <Grid item sm={6} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={6} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
              </Grid>

              <Grid container justify="center" wrap="nowrap">
                <Grid item sm={6} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item sm={6} className={classes.bigBlock}>
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
                <Grid item lg={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item lg={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item lg={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item lg={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
              </Grid>
            </Box>



            <Box display={{ xs: 'none', xl: 'block' }}>
              <Grid container justify="center" wrap="nowrap">
                <Grid item xl={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item xl={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item xl={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
                <Grid item xl={3} className={classes.bigBlock}>
                  <ImageLink link='/' image='img/blues.png' />
                </Grid>
              </Grid>
            </Box>

          </Box>
          <Box mt="155px">
            <ListenNowButton />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default GroovePart;
