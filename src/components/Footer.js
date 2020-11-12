import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#010101',
  },
  footerInfo: {
    paddingRight: '100px',
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      marginBottom: '55px',
    },
  },
  footerInfoLogo: {
    marginBottom: '50px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
  },
  footerInfoText: {
    fontFamily: 'BarlowThin!important',
    fontSize: '16px',
  },
  logo: {
    maxWidth: "105px",
  },
  socialLink: {
    marginRight: theme.spacing(3),
  },
  title: {
    fontSize: '16px',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#a19eb1',
  },
  footerSectionLinks: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '100px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingBottom: '55px',
    },
  },
  footerSectionLink: {
    marginBottom: theme.spacing(1),
    fontWeight: 700,
    letterSpacing: '.5px',
    color: '#ffffff',
  },
  footer: {
    textAlign: "right",
    [theme.breakpoints.down('xs')]: {
      marginTop: '-70px',
    },
  },
  copyright: {
    fontWeight: 900,
    color: '#5d5b65',
    marginBottom: theme.spacing(1),
  },
  links: {
    color: '#a19eb1',
    '& > * + *': {
      marginLeft: theme.spacing(2.5),
    },
  },
  link: {
    fontWeight: 900,
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container fixed>
        <Box padding="45px 0 50px">
          <Box mb="70px">
            <Grid container>
              <Grid item md={12} lg={3} className={classes.footerInfo}>
                <div className={classes.footerInfoLogo}>
                  <Link href="/">
                    <img src="../img/logo.png" alt="logo" className={classes.logo} />
                  </Link>
                </div>
                <Box mb="45px" display={{ xs: 'none', lg: 'block' }}>
                  <Typography variant="body2" className={classes.footerInfoText}>
                    Live 365 is the easiest way to create an online radio station and discover hundreds of stations from every style of music and talk.
                  </Typography>
                </Box>
                <Typography className={classes.socialLinks}>
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit" className={classes.socialLink}>
                    <FacebookIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" rel="noopener" color="inherit" className={classes.socialLink}>
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit" className={classes.socialLink}>
                    <InstagramIcon fontSize="large" />
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={12} lg={9}>
                <Grid container>
                  <Grid item xs={12} sm={4} md={3}>
                    <Box mb={2}>
                      <Typography variant="h6" className={classes.title}>Listeners</Typography>
                    </Box>
                    <Typography className={classes.footerSectionLinks}>
                      <Link href="/" className={classes.footerSectionLink}>
                        Where to Listen
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Support
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Box mb={2}>
                      <Typography variant="h6" className={classes.title}>Broadcasters</Typography>
                    </Box>
                    <Typography className={classes.footerSectionLinks}>
                      <Link href="/" className={classes.footerSectionLink}>
                        Start a Station
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Resources
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Podcasts
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Support
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Box mb={2}>
                      <Typography variant="h6" className={classes.title}>Company</Typography>
                    </Box>
                    <Typography className={classes.footerSectionLinks}>
                      <Link href="/" className={classes.footerSectionLink}>
                        About
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Blog
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Jobs
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.footer}>
            <Typography variant="body2" className={classes.copyright}>&copy; 2020 Live365</Typography>
            <Typography className={classes.links}>
              <Link href="/" color="inherit" className={classes.link}>
                Terms
            </Link>
              <Link href="/" color="inherit" className={classes.link}>
                DMCA
            </Link>
              <Link href="/" color="inherit" className={classes.link}>
                Privacy
            </Link>
              <Link href="/" color="inherit" className={classes.link}>
                Cookies
            </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer;
