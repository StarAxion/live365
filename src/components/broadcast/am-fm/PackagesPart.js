import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ColoredGradientBlock from '../../ColoredGradientBlock';
import Package from './Package';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0F0732',
    background: '#F5F5F7',
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '99px 0 118px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  leftHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '412px',
    },
  },
  rightHalf: {
    paddingTop: '49px',
    [theme.breakpoints.down('xl')]: {
      maxWidth: '692px',
    },
  },
  title: {
    fontSize: '54px',
  },
  par: {
    lineHeight: '36px',
    fontSize: '24px',
  },
}));

const PackagesPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Box className={classes.outerContainer}>
        <Hidden mdDown>
          <ColoredGradientBlock
            size='75px'
            right='417px'
            bottom='121px'
            deg='-26'
            startColor='#EEE950'
            startPoint='-20%'
            endColor='#3C893D'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size='165px'
            right='492px'
            bottom='-44px'
            deg='155'
            startColor='#DEC335'
            startPoint='20%'
            endColor='#8C481E'
            endPoint='100%'
          />
        </Hidden>


        <Container fixed>
          <Box className={classes.innerContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} lg={5} className={classes.leftHalf}>
                <Package />
              </Grid>
              <Grid item xs={12} lg={7} className={classes.rightHalf}>
                <SectionIntro
                  width='600px'
                  margin='0'
                  mbTitle='43px'
                  title='Packages built for you.'
                  titleClass={classes.title}
                  mbPar='0'
                  par='Engage more listeners with custom distribution options, robust streaming delivery, and painless licensing and reporting.'
                  parClass={classes.par}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  )
}

export default PackagesPart;
