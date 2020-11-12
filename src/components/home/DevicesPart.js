import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TitlesBlock from '../TitlesBlock';

const useStyles = makeStyles(() => ({
  root: {
    color: '#010101',
    background: '#f1f0f5',
  },
}));

const DevicesPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box padding="180px 0 200px">
          <TitlesBlock
            title='Listen anytime, anywhere.'
            subtitle='Available for iOS, Android, Alexa, or right here on the web. Coming soon to more of your devices.'
          />
          <Box mt="125px">

          </Box>
        </Box>
      </Container>
    </div >
  )
}

export default DevicesPart;
