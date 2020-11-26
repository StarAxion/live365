import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SectionIntro from '../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#020104',
    background: '#D5D3D9',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '180px 0 200px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '124px 0 128px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '77px 0 130px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '92px 0 80px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '65px 0 60px',
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
    },
  },
}));

const DevicesPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width={{ xs: '100%', md: '368px', lg: '546px', xl: '759px' }}
            margin='0'
            mbTitle={{ xs: '35px', sm: '42px', md: '48px', lg: '60px', xl: '70px' }}
            title='Listen anytime, anywhere.'
            titleClass={classes.title}
            parWidth={{ xl: '627px' }}
            mbPar={{ xs: '66px', sm: '105px', md: '68px', lg: '80px', xl: '130px' }}
            par='Available for iOS, Android, Alexa, or right here on the web. Coming soon to more of your devices.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default DevicesPart;
