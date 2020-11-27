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
      padding: '279px 0 164px',
    },
  },
  title: {
    maxWidth: '569px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
            width='738px'
            margin='auto'
            mbTitle='48px'
            title='You need licensing. We’ve got you covered.'
            titleClass={classes.title}
            mbPar='0'
            par='By broadcasting with Live365, your station is covered for transmissions in the USA, Canada, and the UK. Let us handle the complex reporting and legal negotiations while you curate the best content on the Internet.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default TopPart;
