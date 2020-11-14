import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ColoredBlock from '../../ColoredBlock';
import { TopLeftStrong, TopLeftLight, TopRightLight, BottomLeftLight, BottomRightStrong, BottomRightLight } from '../../GradientCover';
import TitlesBlock from '../../TitlesBlock';
import StartStationButton from '../../StartStationButton';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#06012e',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '190px 0 350px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '145px 0 270px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '130px 0 230px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '75px 0 216px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '48px 0 225px',
    },
  },
}));

const TopPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outerContainer}>
        <Box display={{ xs: 'none', md: 'block' }}>
          <ColoredBlock size={{ md: '140px', lg: '190px', xl: '230px' }} color='#fd6316' left={{ md: '70px', lg: '80px', xl: '290px' }} bottom={{ md: '-45px', lg: '-83px', xl: '-100px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '37px', lg: '50px', xl: '60px' }} color='#8bc305' left={{ md: '209px', lg: '270px', xl: '517px' }} bottom={{ md: '94px', lg: '107px', xl: '128px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '77px', lg: '105px', xl: '123px' }} color='#2041e5' left={{ md: '300px', lg: '396px', xl: '668px' }} bottom={{ md: '94px', lg: '106px', xl: '128px' }} >
            <BottomRightStrong />
          </ColoredBlock>
          <ColoredBlock size={{ md: '60px', lg: '82px', xl: '98px' }} color='#d13eeb' left={{ md: '377px', lg: '500px', xl: '790px' }} bottom={{ md: '35px', lg: '26px', xl: '30px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '37px', lg: '50px', xl: '60px' }} color='#86bc06' right={{ md: '382px', lg: '506px', xl: '800px' }} bottom={{ md: '26px', lg: '14px', xl: '17px' }}>
            <BottomRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '60px', lg: '82px', xl: '97px' }} color='#d13eeb' right={{ md: '323px', lg: '426px', xl: '703px' }} bottom={{ md: '62px', lg: '63px', xl: '76px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '76px', lg: '103px', xl: '123px' }} color='#2041e6' right={{ md: '200px', lg: '260px', xl: '504px' }} bottom={{ md: '-15px', lg: '-42px', xl: '-50px' }} >
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size={{ md: '140px', lg: '190px', xl: '228px' }} color='#fd6316' right={{ md: '62px', lg: '70px', xl: '276px' }} bottom={{ md: '60px', lg: '60px', xl: '72px' }} >
            <TopLeftLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', sm: 'block', md: 'none' }}>
          <ColoredBlock size='140px' color='#fd6316' left='20px' bottom='-50px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='37px' color='#84b807' left='226px' bottom='22px'>
            <BottomRightLight />
          </ColoredBlock>
          <ColoredBlock size='60px' color='#d13eeb' left='262px' bottom='58px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='76px' color='#2043eb' right='156px' bottom='-20px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='140px' color='#fd6316' right='17px' bottom='56px'>
            <TopLeftLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'block', sm: 'none' }}>
          <ColoredBlock size='140px' color='#fd6316' left='-22px' bottom='-40px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='76px' color='#1f40e2' left='118px' bottom='100px'>
            <BottomRightStrong />
          </ColoredBlock>
          <ColoredBlock size='60px' color='#d13eeb' right='20px' bottom='38px'>
            <BottomLeftLight />
          </ColoredBlock>
          <ColoredBlock size='36px' color='#78a60a' right='-15px' bottom='97px'>
            <TopLeftLight />
          </ColoredBlock>
        </Box>


        <div className={classes.innerContainer}>
          <Container fixed>
            <TitlesBlock
              width={{ xs: '100%', lg: '1020px', xl: '1010px' }}
              margin='auto'
              mbTitle={{ xs: '42px', sm: '46px', md: '52px', lg: '88px' }}
              alignTitle='left'
              title='The easiest way to build a fully-licensed online radio station.'
              mbSubitle={{ xs: '60px', sm: '52px', md: '55px', lg: '80px' }}
              alignSubtitle={{ sm: 'left', md: 'center' }}
              subtitle='A complete solution to get your broadcasting legally in minutes.'
            />
            <StartStationButton
              mt='0'
              mb='0'
            />
          </Container>
        </div >
      </div>
    </div >
  )
}

export default TopPart;
