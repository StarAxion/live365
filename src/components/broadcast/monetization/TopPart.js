import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#0F0732',
    background: '#F5F5F7',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '279px 0 128px',
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

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width='739px'
            margin='auto'
            mbTitle='48px'
            title='Simple and flexible monetization options. '
            titleClass={classes.title}
            mbPar='0'
            par='Live365’s ad insertion solution enables broadcasters to maximize their revenue for their audience. Live365 is connected to the largest ad exchanges and trading desks, as well as directly representing inventory to buyers. The net result? We give you the maximum revenue for your listeners.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default TopPart;
