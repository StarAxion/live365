import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NumberedBlock from './NumberedBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#020104',
    background: '#D5D3D9',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '215px 0 145px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '148px 0 88px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '126px 0 132px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '82px 0 5px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '85px',
    },
  },
  block: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '70px',
    },
  },
}));

const BlocksPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <Grid container justify="space-between">
            <Grid item xs={12} md={4} className={classes.block}>
              <NumberedBlock
                containerWidth={{ xs: '303px', md: '284px', lg: '333px' }}
                size={{ xs: '193px', md: '244px', lg: '333px' }}
                mb={{ xs: '40px', md: '58px', lg: '88px' }}
                align={{ xs: 'left', md: 'center' }}
                numberWidth={{ xs: '55px', md: '50px', lg: '60px' }}
                number='1'
                text='Upload tracks to your library or hook up your existing streaming software.'
              />
            </Grid>

            <Grid item xs={12} md={4} className={classes.block}>
              <NumberedBlock
                containerWidth={{ xs: '303px', md: '284px', lg: '333px' }}
                size={{ xs: '193px', md: '244px', lg: '333px' }}
                mb={{ xs: '40px', md: '58px', lg: '88px' }}
                align={{ xs: 'left', md: 'center' }}
                numberWidth={{ xs: '55px', md: '50px', lg: '60px' }}
                number='2'
                text='Schedule life events or curated playlists, and let AutoDJ fill in the gaps with a DMCA compliant mix.'
              />
            </Grid>

            <Grid item xs={12} md={4} className={classes.block}>
              <NumberedBlock
                containerWidth={{ xs: '303px', md: '284px', lg: '333px' }}
                size={{ xs: '193px', md: '244px', lg: '333px' }}
                mb={{ xs: '40px', md: '58px', lg: '88px' }}
                align={{ xs: 'left', md: 'center' }}
                numberWidth={{ xs: '55px', md: '50px', lg: '60px' }}
                number='3'
                text='Visualize listening statistics, monetize your shows, and rest easy - we`ll handle this licensing &amp; reporting.'
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default BlocksPart;
