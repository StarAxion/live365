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
      padding: '97px 0 335px 88px',
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
            mbTitle='53px'
            title='How it works'
            titleClass={classes.title}
            mbPar='0'
            par='Live365 inserts ads for you at intervals of your choosing. Each ad break can be 30, 60, 90, or 120 seconds long. A minimum of 4 minutes per hour is required, but you may run more ads to maximize your revenue. Impressions and revenue are reported directly into your admin for transparent reporting and billing. We even provide a method for your DJs to insert ads in their live shows.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbPar='119px'
            par='Ad breaks in the stream'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='53px'
            title='Maximum revenue'
            titleClass={classes.title}
            mbPar='119px'
            par='Live365’s Private Marketplace (PMP) allows buyers to transparently buy audio ad inventory across the platform and compete for the highest amount of revenue possible.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='53px'
            title='Not interested in running ads?'
            titleClass={classes.title}
            mbPar='0'
            par='Choose one of our “No Ads” packages to remove monetization from your account.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default MiddlePart;
