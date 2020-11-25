import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import ColoredGradientBlock from '../../ColoredGradientBlock';
import SectionIntro from '../../SectionIntro';
import CheckboxControl from './CheckboxControl';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#0F0732',
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '263px 0 431px',
    },
  },
  title: {
    fontSize: '54px',
  },
  par: {
    lineHeight: '36px',
    fontSize: '24px',
  },
}));

const TopPart = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <section className={classes.root}>
      <Box className={classes.outerContainer}>
        <Hidden mdDown>
          <ColoredGradientBlock
            size='110px'
            left='27px'
            top='264px'
            deg='166'
            startColor='#CD1A1A'
            startPoint='0%'
            endColor='#3F128E'
            endPoint='140%'
          />
          <ColoredGradientBlock
            size='86px'
            left='137px'
            top='374px'
            deg='164'
            startColor='#7D0796'
            startPoint='-20%'
            endColor='#2033A4'
            endPoint='120%'
          />
          <ColoredGradientBlock
            size='123px'
            right='123px'
            top='82px'
            deg='256'
            startColor='#3C1A96'
            startPoint='0%'
            endColor='#0F76C6'
            endPoint='100%'
          />
          <ColoredGradientBlock
            size='228px'
            right='-105px'
            top='205px'
            deg='166'
            startColor='#AC6735'
            startPoint='0%'
            endColor='#CD1A1A'
            endPoint='100%'
          />
        </Hidden>


        <Container fixed>
          <Box className={classes.innerContainer}>
            <SectionIntro
              width='100%'
              margin='0'
              mbTitle='42px'
              title='Start broadcasting in minutes.'
              titleClass={classes.title}
              mbPar='36px'
              par='Flexible options for any broadcaster.'
              parClass={classes.par}
            />

            <CheckboxControl
              mb='19px'
              checked={checked}
              onChange={handleChange}
              label='With advertisements'
              par='Advertisements lower your payment and provide monetization.'
            />
            <CheckboxControl
              mb='0'
              label='Annual term'
              par='20% off the monthly term pricing.'
            />
          </Box>
        </Container>
      </Box>
    </section>
  )
}

export default TopPart;
