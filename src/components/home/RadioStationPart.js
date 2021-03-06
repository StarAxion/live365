import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../SectionIntro';
import InfoBlock from '../InfoBlock';
import ButtonLink from '../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#0F0732',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '113px 0 153px',
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '110px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '106px 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '92px 0 80px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '65px 0',
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
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  leftHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '548px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '449px',
    },
  },
  rightHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '580px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '288px',
    },
  },
  infoBlockTitle: {
    fontSize: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  infoBlockPar: {
    lineHeight: '30px',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '27px',
      fontSize: '18px',
    },
  },
}));

const RadioStationPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <Hidden mdUp>
            <SectionIntro
              width='100%'
              margin='0'
              mbTitle={{ xs: '67px', sm: '88px' }}
              title='Create your own internet radio station.'
              titleClass={classes.title}
            />

            <Box maxWidth={{ sm: '288px' }}>
              <InfoBlock
                mb={{ xs: '55px', sm: '30px' }}
                link='/broadcast/audience'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='img/icons/audience.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Audience'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
              />
              <InfoBlock
                mb={{ xs: '55px', sm: '30px' }}
                link='/broadcast/licensing'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='img/icons/licensing.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Licensing'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Music licensing coverage in the United States, United Kingdom, and Canada.'
              />
              <InfoBlock
                mb='0'
                link='/broadcast/monetization'
                direction='row'
                iconWidth={{ xs: '46px', lg: '60px' }}
                icon='img/icons/monetization.png'
                mlTitle={{ xs: '17px', lg: '36px' }}
                mtTitle='0'
                titleClass={classes.infoBlockTitle}
                title='Monetization'
                mlText={{ xs: '63px', lg: '96px' }}
                mtText='8px'
                parClass={classes.infoBlockPar}
                text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
              />
            </Box>

            <Box
              display={{ sm: 'flex' }}
              justifyContent='center'
              mt={{ xs: '165px', sm: '78px!important' }}
            >
              <ButtonLink
                margin='0'
                link='/broadcast/am-fm'
                height='65px'
                padding='0 40px'
                fontFamily='BarlowBold'
                bg='#fd6316'
                radius='5px'
              >
                Start a station
              </ButtonLink>
              <ButtonLink
                margin={{ xs: '16px 0 0 0', sm: '0 0 0 16px' }}
                link='/'
                height='65px'
                padding='0 40px'
                fontFamily='BarlowBold'
                bg='#170954'
                radius='5px'
              >
                Learn more
              </ButtonLink>
            </Box>
          </Hidden>


          <Hidden smDown>
            <Grid container wrap="nowrap" className={classes.gridContainer}>
              <Grid item md={8} lg={6} className={classes.leftHalf}>
                <SectionIntro
                  width={{ md: '376px', lg: '100%' }}
                  margin='0'
                  mbTitle={{ md: '80px', lg: '108px', xl: '140px' }}
                  title='Create your own internet radio station.'
                  titleClass={classes.title}
                />

                <Box display="flex">
                  <ButtonLink
                    margin='0'
                    link='/broadcast/am-fm'
                    height='65px'
                    padding='0 40px'
                    fontFamily='BarlowBold'
                    bg='#fd6316'
                    radius='5px'
                  >
                    Start a station
                  </ButtonLink>
                  <ButtonLink
                    margin={{ xs: '16px 0 0 0', sm: '0 0 0 16px' }}
                    link='/'
                    height='65px'
                    padding='0 40px'
                    fontFamily='BarlowBold'
                    bg='#170954'
                    radius='5px'
                  >
                    Learn more
                  </ButtonLink>
                </Box>
              </Grid>

              <Grid item md={4} lg={6} className={classes.rightHalf}>
                <InfoBlock
                  mb={{ md: '30px', lg: '98px' }}
                  link='/broadcast/audience'
                  direction='row'
                  iconWidth={{ xs: '46px', lg: '60px' }}
                  icon='img/icons/audience.png'
                  mlTitle={{ xs: '17px', lg: '36px' }}
                  mtTitle='0'
                  titleClass={classes.infoBlockTitle}
                  title='Audience'
                  mlText={{ xs: '63px', lg: '96px' }}
                  mtText='8px'
                  parClass={classes.infoBlockPar}
                  text='Access listeners across Live365`s website, mobile applications, home devices, and more.'
                />
                <InfoBlock
                  mb={{ md: '30px', lg: '98px' }}
                  link='/broadcast/licensing'
                  direction='row'
                  iconWidth={{ xs: '46px', lg: '60px' }}
                  icon='img/icons/licensing.png'
                  mlTitle={{ xs: '17px', lg: '36px' }}
                  mtTitle='0'
                  titleClass={classes.infoBlockTitle}
                  title='Licensing'
                  mlText={{ xs: '63px', lg: '96px' }}
                  mtText='8px'
                  parClass={classes.infoBlockPar}
                  text='Music licensing coverage in the United States, United Kingdom, and Canada.'
                />
                <InfoBlock
                  mb='0'
                  link='/broadcast/monetization'
                  direction='row'
                  iconWidth={{ xs: '46px', lg: '60px' }}
                  icon='img/icons/monetization.png'
                  mlTitle={{ xs: '17px', lg: '36px' }}
                  mtTitle='0'
                  titleClass={classes.infoBlockTitle}
                  title='Monetization'
                  mlText={{ xs: '63px', lg: '96px' }}
                  mtText='8px'
                  parClass={classes.infoBlockPar}
                  text='Loin Live365`s monetization program to earn revenue and lower your streaming costs.'
                />
              </Grid>
            </Grid>
          </Hidden>
        </Box>
      </Container>
    </section>
  )
}

export default RadioStationPart;
