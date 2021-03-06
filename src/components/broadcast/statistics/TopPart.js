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
      padding: '279px 0 272px',
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
            title='Visualize listener engagement over time, in real-time.'
            titleClass={classes.title}
            mbPar='0'
            par='Get the information you need to make informed decisions.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default TopPart;
