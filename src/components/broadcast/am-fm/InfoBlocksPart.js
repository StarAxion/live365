import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#0F0732',
    background: '#F5F5F7',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '137px 0 176px',
    },
  },
  title: {
    fontSize: '54px',
  },
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  block: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '324px',
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
            mbTitle='111px'
            title='Ease of use. Peace of mind.'
            titleClass={classes.title}
          />

          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} lg={4} className={classes.block}>

            </Grid>
            <Grid item xs={12} lg={4} className={classes.block}>

            </Grid>
            <Grid item xs={12} lg={4} className={classes.block}>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default InfoBlocksPart;
