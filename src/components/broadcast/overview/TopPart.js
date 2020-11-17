import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ColoredBlock from '../../ColoredBlock';
import { TopLeftStrong, TopLeftLight, TopRightLight, BottomLeftLight, BottomRightStrong, BottomRightLight } from '../../GradientCover';
import TitlesBlock from '../../TitlesBlock';
import ButtonLink from '../../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#0F0732',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '260px 0 350px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '215px 0 270px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '200px 0 230px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '145px 0 216px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '118px 0 225px',
    },
  },
  title: {
    fontFamily: 'BarlowBold',
    fontSize: '54px',
    color: 'inherit',
    [theme.breakpoints.down('lg')]: {
      fontSize: '48px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
      textAlign: 'left',
    },
  },
}));

const TopPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outerContainer}>
        <Hidden smDown>
          <ColoredBlock size={{ md: '139px', lg: '190px', xl: '228px' }} color='#FD631C' left={{ md: '70px', lg: '80px', xl: '290px' }} bottom={{ md: '-45px', lg: '-83px', xl: '-100px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '36px', lg: '49px', xl: '59px' }} color='#9CDD07' left={{ md: '209px', lg: '270px', xl: '517px' }} bottom={{ md: '94px', lg: '107px', xl: '128px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '75px', lg: '102px', xl: '123px' }} color='#284CFF' left={{ md: '300px', lg: '396px', xl: '668px' }} bottom={{ md: '94px', lg: '106px', xl: '128px' }}>
            <BottomRightStrong />
          </ColoredBlock>
          <ColoredBlock size={{ md: '59px', lg: '81px', xl: '97px' }} color='#D040EA' left={{ md: '377px', lg: '500px', xl: '790px' }} bottom={{ md: '35px', lg: '26px', xl: '30px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '36px', lg: '49px', xl: '59px' }} color='#9CDD07' right={{ md: '382px', lg: '506px', xl: '800px' }} bottom={{ md: '26px', lg: '14px', xl: '17px' }}>
            <BottomRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '59px', lg: '81px', xl: '97px' }} color='#D040EA' right={{ md: '323px', lg: '426px', xl: '703px' }} bottom={{ md: '62px', lg: '63px', xl: '76px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ md: '75px', lg: '102px', xl: '123px' }} color='#284CFF' right={{ md: '200px', lg: '260px', xl: '504px' }} bottom={{ md: '-15px', lg: '-42px', xl: '-50px' }}>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size={{ md: '139px', lg: '190px', xl: '228px' }} color='#FD631C' right={{ md: '62px', lg: '70px', xl: '276px' }} bottom={{ md: '60px', lg: '60px', xl: '72px' }}>
            <TopLeftLight />
          </ColoredBlock>
        </Hidden>

        <Hidden xsDown mdUp>
          <ColoredBlock size='139px' color='#FD631C' left='20px' bottom='-50px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='36px' color='#9CDD07' left='226px' bottom='22px'>
            <BottomRightLight />
          </ColoredBlock>
          <ColoredBlock size='59px' color='#D040EA' left='262px' bottom='58px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='75px' color='#284CFF' right='156px' bottom='-20px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='139px' color='#FD631C' right='17px' bottom='56px'>
            <TopLeftLight />
          </ColoredBlock>
        </Hidden>

        <Hidden smUp>
          <ColoredBlock size='139px' color='#FD631C' left='-22px' bottom='-40px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='75px' color='#284CFF' left='118px' bottom='100px'>
            <BottomRightStrong />
          </ColoredBlock>
          <ColoredBlock size='59px' color='#D040EA' right='20px' bottom='38px'>
            <BottomLeftLight />
          </ColoredBlock>
          <ColoredBlock size='36px' color='#9CDD07' right='-15px' bottom='97px'>
            <TopLeftLight />
          </ColoredBlock>
        </Hidden>


        <div className={classes.innerContainer}>
          <Container fixed>
            <Box
              maxWidth={{ xs: '100%', lg: '1033px', xl: '1013px' }}
              ml="auto"
              mr="auto"
            >
              <Box
                mb={{ xs: '42px', sm: '46px', md: '52px', lg: '88px' }}
                textAlign="left"
              >
                <Typography
                  variant="h2"
                  color="inherit"
                  className={classes.title}
                >
                  The easiest way to build a fully-licensed online radio station.
                </Typography>
              </Box>
            </Box>
            <TitlesBlock
              mbSubitle={{ xs: '60px', sm: '52px', md: '55px', lg: '80px' }}
              alignSubtitle={{ sm: 'left', md: 'center' }}
              subtitle='A complete solution to get your broadcasting legally in minutes.'
            />
            <ButtonLink
              justify={{ sm: 'flex-start', md: 'center' }}
              margin='0'
              bg='#fd6316'
              color='secondary'
              link='/broadcast/am-fm'
            >
              Start a station
            </ButtonLink>
          </Container>
        </div>
      </div>
    </div >
  )
}

export default TopPart;
