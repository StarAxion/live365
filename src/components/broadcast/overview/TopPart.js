import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ColoredGradientBlock from '../../ColoredGradientBlock';
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
    <section className={classes.root}>
      <Box className={classes.outerContainer}>
        <Hidden smDown>
          <ColoredGradientBlock
            size={{ md: '139px', lg: '190px', xl: '228px' }}
            left={{ md: '70px', lg: '80px', xl: '290px' }}
            bottom={{ md: '-45px', lg: '-83px', xl: '-100px' }}
            deg='204'
            startColor='#0F0732'
            startPoint='0%'
            endColor='#FD631C'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size={{ md: '36px', lg: '49px', xl: '59px' }}
            left={{ md: '209px', lg: '270px', xl: '517px' }}
            bottom={{ md: '94px', lg: '107px', xl: '128px' }}
            deg='225'
            startColor='#0F0732'
            startPoint='5%'
            endColor='#9CDD07'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size={{ md: '75px', lg: '102px', xl: '123px' }}
            left={{ md: '300px', lg: '396px', xl: '668px' }}
            bottom={{ md: '94px', lg: '106px', xl: '128px' }}
            deg='153'
            startColor='#284CFF'
            startPoint='0%'
            endColor='#0F0732'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size={{ md: '59px', lg: '81px', xl: '97px' }}
            left={{ md: '377px', lg: '500px', xl: '790px' }}
            bottom={{ md: '35px', lg: '26px', xl: '30px' }}
            deg='63'
            startColor='#D040EA'
            startPoint='0%'
            endColor='#1D1155'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size={{ md: '36px', lg: '49px', xl: '59px' }}
            right={{ md: '382px', lg: '506px', xl: '800px' }}
            bottom={{ md: '26px', lg: '14px', xl: '17px' }}
            deg='153'
            startColor='#9CDD07'
            startPoint='5%'
            endColor='#0F0732'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size={{ md: '59px', lg: '81px', xl: '97px' }}
            right={{ md: '323px', lg: '426px', xl: '703px' }}
            bottom={{ md: '62px', lg: '63px', xl: '76px' }}
            deg='63'
            startColor='#D040EA'
            startPoint='0%'
            endColor='#1D1155'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size={{ md: '75px', lg: '102px', xl: '123px' }}
            right={{ md: '200px', lg: '260px', xl: '504px' }}
            bottom={{ md: '-15px', lg: '-42px', xl: '-50px' }}
            deg='153'
            startColor='#0F0732'
            startPoint='20%'
            endColor='#284CFF'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size={{ md: '139px', lg: '190px', xl: '228px' }}
            right={{ md: '62px', lg: '70px', xl: '276px' }}
            bottom={{ md: '60px', lg: '60px', xl: '72px' }}
            deg='135'
            startColor='#0F0732'
            startPoint='0%'
            endColor='#FD631C'
            endPoint='80%'
          />
        </Hidden>

        <Hidden xsDown mdUp>
          <ColoredGradientBlock
            size='139px'
            left='20px'
            bottom='-50px'
            deg='204'
            startColor='#0F0732'
            startPoint='0%'
            endColor='#FD631C'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size='36px'
            left='226px'
            bottom='22px'
            deg='153'
            startColor='#9CDD07'
            startPoint='5%'
            endColor='#0F0732'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='59px'
            left='262px'
            bottom='58px'
            deg='63'
            startColor='#D040EA'
            startPoint='20%'
            endColor='#1D1155'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='75px'
            right='156px'
            bottom='-20px'
            deg='153'
            startColor='#0F0732'
            startPoint='20%'
            endColor='#284CFF'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='139px'
            right='17px'
            bottom='56px'
            deg='135'
            startColor='#0F0732'
            startPoint='0%'
            endColor='#FD631C'
            endPoint='80%'
          />
        </Hidden>

        <Hidden smUp>
          <ColoredGradientBlock
            size='139px'
            left='-22px'
            bottom='-40px'
            deg='63'
            startColor='#FD631C'
            startPoint='20%'
            endColor='#0F0732'
            endPoint='120%'
          />
          <ColoredGradientBlock
            size='75px'
            left='118px'
            bottom='100px'
            deg='153'
            startColor='#284CFF'
            startPoint='0%'
            endColor='#0F0732'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size='59px'
            right='20px'
            bottom='38px'
            deg='63'
            startColor='#1D1155'
            startPoint='0%'
            endColor='#D040EA'
            endPoint='80%'
          />
          <ColoredGradientBlock
            size='36px'
            right='-15px'
            bottom='97px'
            deg='135'
            startColor='#0F0732'
            startPoint='0%'
            endColor='#9CDD07'
            endPoint='100%'
          />
        </Hidden>


        <Box className={classes.innerContainer}>
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
              margin='0'
              color='secondary'
              link='/broadcast/am-fm'
              height='65px'
              padding='0 40px'
              fontFamily='BarlowBold'
              bg='#fd6316'
              radius='5px'
            >
              Start a station
            </ButtonLink>
          </Container>
        </Box>
      </Box>
    </section>
  )
}

export default TopPart;
