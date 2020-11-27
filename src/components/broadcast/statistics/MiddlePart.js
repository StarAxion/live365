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
      padding: '114px 0 814px 24px',
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
            title='Real-time statistics'
            titleClass={classes.title}
            mbPar='105px'
            par='Our statistics platform allows station managers and DJs to track their listeners in real time and drill down on exactly who’s tuning in.'
            parClass={classes.par}
          />
          <SectionIntro
            width='761px'
            margin='0'
            mbTitle='53px'
            title='Historical analytics'
            titleClass={classes.title}
            mbPar='0'
            par='Listener analytics give you a view into your audience. Station managers can look back on their week to see how shows and playlists are performing. '
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default MiddlePart;
