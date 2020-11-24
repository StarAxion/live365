import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SectionIntro from '../../SectionIntro';
import InfoBlock from '../../InfoBlock';

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
  infoBlockTitle: {
    textAlign: 'center',
    fontSize: '26px',
  },
  infoBlockPar: {
    lineHeight: '27px',
    fontSize: '18px',
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
              <InfoBlock
                mb={{ md: '30px', lg: '98px' }}
                link='/broadcast/licensing'
                direction='column'
                iconWidth='96px'
                icon='../img/icons/licensing.png'
                mlTitle='0'
                mtTitle='10px'
                titleClass={classes.infoBlockTitle}
                title='Licensing'
                mlText='0'
                mtText='18px'
                parClass={classes.infoBlockPar}
                text='Let Live365 cover your SoundExchange reporting and payments. Just focus on creating the best content.'
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.block}>
              <InfoBlock
                mb={{ md: '30px', lg: '98px' }}
                link='/broadcast/audience'
                direction='column'
                iconWidth='96px'
                icon='../img/icons/audience.png'
                mlTitle='0'
                mtTitle='10px'
                titleClass={classes.infoBlockTitle}
                title='Audience'
                mlText='0'
                mtText='18px'
                parClass={classes.infoBlockPar}
                text='On mobile, home devices, and the web, your station will be in front of a growing audience on the Live365 Radio Network. Also distribute on aggregators such as TuneIn, iTunes, and more.'
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.block}>
              <InfoBlock
                mb={{ md: '30px', lg: '98px' }}
                link='/'
                direction='column'
                iconWidth='96px'
                icon='../img/icons/compatibility.png'
                mlTitle='0'
                mtTitle='10px'
                titleClass={classes.infoBlockTitle}
                title='Software Agnostic'
                mlText='0'
                mtText='18px'
                parClass={classes.infoBlockPar}
                text='Your current encoder and automation are plug-and-play with Live365’s agnostic Icecast streaming.'
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default InfoBlocksPart;
