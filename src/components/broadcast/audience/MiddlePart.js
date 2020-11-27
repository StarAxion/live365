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
      padding: '576px 0 206px',
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
            title='Website integration'
            titleClass={classes.title}
            mbPar='135px'
            par='Already have a website? Just embed your player widget so your listeners can tune in.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='57px'
            title='Listening apps'
            titleClass={classes.title}
            mbPar='45px'
            par='Your station is instantly listed and searchable in our popular listening directory. Enjoy the network effect as listeners use genre and text search to find your station quickly.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbPar='0'
            par='Our iPhone and Android apps are free and available in the App Store and on Google Play.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default MiddlePart;
