import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0F0732',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '128px 0 613px 64px',
    },
  },
  title: {
    fontSize: '48px',
  },
  par: {
    lineHeight: '36px',
    fontSize: '24px',
  },
}));

const MiddlePart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='57px'
            title='Music licensing, explained.'
            titleClass={classes.title}
            mbPar='140px'
            par='Live365 covers webcast transmissions on Live365 in the USA, Canada, and the United Kingdom. The USA is covered via ASCAP, BMI, SESAC, and SoundExchange, Canada is covered via SOCAN and Re:Sound, and the UK is covered via PPL and PRS for Music. Our coverage is provided through finalized agreements, interim agreements, and consent decrees with respective collection societies.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='57px'
            title='Custom solutions'
            titleClass={classes.title}
            mbPar='0'
            par='Don’t need licensing for your station, or already have your own in place? We have custom packages for customers who don’t need licensing. Contact us at sales@live365.com.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default MiddlePart;
