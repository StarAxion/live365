import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ColoredGradientBlock from '../../ColoredGradientBlock';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0F0732',
    background: '#ffffff',
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '139px 0 179px',
    },
  },
  gridContainer: {
    '&:first-of-type': {
      marginBottom: '168px',
    },
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  textBlock: {
    maxWidth: '484px',
  },
  pictureBlock: {
    maxWidth: '584px',
  },
  title: {
    fontSize: '48px',
  },
  par: {
    lineHeight: '33px',
    fontSize: '22px',
  },
}));

const MiddlePart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Box className={classes.outerContainer}>
        <Hidden lgDown>
          <ColoredGradientBlock
            size='93px'
            left='60px'
            top='-31px'
            deg='63'
            startColor='#20A499'
            startPoint='0%'
            endColor='#1C6063'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='207px'
            left='-146px'
            top='62px'
            deg='207'
            startColor='#0F76C6'
            startPoint='0%'
            endColor='#3C1A96'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='139px'
            right='-67px'
            bottom='552px'
            deg='155'
            startColor='#DEC335'
            startPoint='0%'
            endColor='#8C481E'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='93px'
            right='71px'
            bottom='459px'
            deg='169'
            startColor='#FF6740'
            startPoint='0%'
            endColor='#9E0022'
            endPoint='100%'
          />
        </Hidden>


        <Container fixed>
          <Box className={classes.innerContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} lg={6} className={classes.textBlock}>
                <SectionIntro
                  width='100%'
                  margin='0'
                  mbTitle='52px'
                  title='All-in-one platform for management and distribution. '
                  titleClass={classes.title}
                  parWidth='443px'
                  mbPar='0'
                  par='Our cloud-based station management platform gives you the tools to easily visualize streaming analytics and listener engagement.'
                  parClass={classes.par}
                />
              </Grid>
              <Grid item xs={12} lg={6} className={classes.pictureBlock}>

              </Grid>
            </Grid>

            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} lg={6} className={classes.pictureBlock}>

              </Grid>
              <Grid item xs={12} lg={6} className={classes.textBlock}>
                <SectionIntro
                  width='100%'
                  margin='0'
                  mbTitle='52px'
                  title='Now streaming: everywhere.'
                  titleClass={classes.title}
                  parWidth='443px'
                  mbPar='0'
                  par='Enhance your online presence with custom mobile apps and web players. Plus get your station in front of millions of listeners on the Live365 network.'
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

export default MiddlePart;
