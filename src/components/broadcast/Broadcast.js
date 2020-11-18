import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(5.5),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(2),
      },
    },
  },
  link: {
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    color: 'inherit',
  },
}));

const Broadcast = () => {
  const classes = useStyles();

  return (
    <>
      <Header ml={{ sm: 3, md: 4.5, lg: 5.5 }}>
        <Box className={classes.links}>
          <Link href="/listen" className={classes.link}>Listen</Link>
          <Link href="/broadcast" className={classes.link}>Broadcast</Link>
        </Box>
      </Header>

      <main>
        {window.location.href.endsWith('/am-fm') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              AM/FM
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/audience') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              Audience
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/licensing') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              Licensing
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/monetization') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              Monetization
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/pricing') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              Pricing
            </Typography>
          </Box>
        }
        {window.location.href.endsWith('/statistics') &&
          <Box padding="100px 0 30px" textAlign="center">
            <Typography
              variant="h1"
            >
              Statistics
            </Typography>
          </Box>
        }
      </main>

      <Footer />
    </>
  )
}

export default Broadcast;
