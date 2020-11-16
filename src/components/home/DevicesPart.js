import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';

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
}));

const DevicesPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <TitlesBlock
            width={{ xs: '100%', md: '352px', lg: '535px', xl: '752px' }}
            margin='0'
            mbTitle={{ xs: '35px', sm: '42px', md: '48px', lg: '60px', xl: '70px' }}
            alignTitle='left'
            title='Listen anytime, anywhere.'
            mbSubitle={{ xs: '66px', sm: '105px', md: '68px', lg: '80px', xl: '130px' }}
            alignSubtitle='left'
            subtitle='Available for iOS, Android, Alexa, or right here on the web. Coming soon to more of your devices.'
          />
          <Box></Box>
        </Box>
      </Container>
    </div >
  )
}

export default DevicesPart;
