import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0F0732',
    background: '#F4F4F4',
  },
  outerContainer: {
    position: 'relative',
    [theme.breakpoints.down('xl')]: {
      padding: '269px 0 217px',
    },
  },
  innerContainer: {
    position: 'absolute',
    left: 0,
    top: '664px',
  },
  title: {
    fontSize: '54px',
  },
  par: {
    lineHeight: '33px',
    fontSize: '24px',
  },
  button: {
    display: 'flex',
    justifyComtent: 'center',
    alignItems: 'center',
    width: '257px',
    height: '257px',
    margin: '0 0 96px 97px',
    padding: 0,
    background: 'linear-gradient(151deg, #b2e0e7 0%, #bcb8dd 100%)',
    borderRadius: '8px',
  },
  buttonInner: {
    display: 'flex',
    justifyComtent: 'center',
    alignItems: 'center',
    width: '225px',
    height: '225px',
    background: 'linear-gradient(151deg, #0FB3C6 20%, #851A96 140%)',
    borderRadius: '8px',
  },
}));

const TopPart = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.outerContainer}>
          <SectionIntro
            width='534px'
            margin='0'
            mbTitle='83px'
            title='Bigger audience, automatically.'
            titleClass={classes.title}
            mbPar='0'
            par='Get your station in front of millions of monthly listeners on the Live365 network.'
            parClass={classes.par}
          />

          <Box className={classes.innerContainer}>
            <Button
              disableRipple
              href='/broadcast/am-fm'
              className={classes.button}
            >
              <Box className={classes.buttonInner}>

              </Box>
            </Button>
            <SectionIntro
              width='534px'
              margin='0'
              mbPar='0'
              par='Get your station in front of thousands of monthly listeners on the Live365 network. Plus, embed our customizable players on your website to beef up your online presence.'
              parClass={classes.par}
            />
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default TopPart;
