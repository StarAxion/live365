import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ColoredGradientBlock from '../../ColoredGradientBlock';
import SectionIntro from '../../SectionIntro';
import ButtonLink from '../../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#0F0732',
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '212px 0 164px',
    },
  },
  title: {
    fontSize: '54px',
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
  contactBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '600px',
    padding: '18px 16px 18px 29px',
    background: 'transparent',
    border: 'solid 2px #615D74',
    borderRadius: '7px',
    boxSizing: 'border-box',
    '& *': {
      padding: 0,
    }
  },
  contactBlockText: {
    lineHeight: '30px',
    fontSize: '20px',
    color: '#ffffff',
  },
}));

const TopPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Box className={classes.outerContainer}>
        <ColoredGradientBlock
          size='265px'
          right='90px'
          top='-52px'
          deg='251'
          startColor='#CC1919'
          startPoint='-20%'
          endColor='#CD761A'
          endPoint='100%'
        />
        <ColoredGradientBlock
          size='203px'
          right='-113px'
          bottom='261px'
          deg='-26'
          startColor='#EEE950'
          startPoint='-20%'
          endColor='#3C893D'
          endPoint='80%'
        />
        <ColoredGradientBlock
          size='129px'
          right='487px'
          bottom='155px'
          deg='164'
          startColor='#FF218C'
          startPoint='-40%'
          endColor='#190FC9'
          endPoint='140%'
        />
        <ColoredGradientBlock
          size='86px'
          right='90px'
          bottom='177px'
          deg='155'
          startColor='#DEC335'
          startPoint='20%'
          endColor='#8C481E'
          endPoint='120%'
        />
        <ColoredGradientBlock
          size='67px'
          right='616px'
          bottom='87px'
          deg='169'
          startColor='#FF6740'
          startPoint='0%'
          endColor='#9E0022'
          endPoint='100%'
        />
        <ColoredGradientBlock
          size='215px'
          right='272px'
          bottom='-62px'
          deg='207'
          startColor='#0F76C6'
          startPoint='0%'
          endColor='#3C1A96'
          endPoint='100%'
        />


        <Box className={classes.innerContainer}>
          <Container fixed>
            <SectionIntro
              width='562px'
              margin='0'
              mbTitle='38px'
              title='AM/FM stream hosting and more.'
              titleClass={classes.title}
              mbPar='54px'
              par='Superior customer support and engaging listener experiences make running your over-the-air station easier than ever.'
              parClass={classes.par}
            />

            <Card className={classes.contactBlock}>
              <CardContent>
                <Typography variant="body1" className={classes.contactBlockText}>
                  Get in touch to learn how we can help.
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonLink
                  margin='0'
                  link='/'
                  height='57px'
                  padding='0 25px'
                  fontFamily='BarlowBold'
                  bg='#FD6923'
                  radius='5px'
                >
                  Contact us
                </ButtonLink>
              </CardActions>
            </Card>
          </Container>
        </Box>
      </Box>
    </section>
  )
}

export default TopPart;
