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
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '48px 0',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '16px',
    },
  },
  footerInfo: {
    paddingRight: '98px',
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      marginBottom: '55px',
    },
  },
  footerInfoLogo: {
    marginBottom: '52px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  },
  footerInfoText: {
    fontFamily: 'BarlowThin!important',
    fontSize: '16px',
  },
  logo: {
    maxWidth: "103px",
  },
  socialLink: {
    marginRight: theme.spacing(3),
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '54px',
    },
  },
  footerSectionTitle: {
    fontSize: '16px',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#a19eb1',
  },
  footerSectionLink: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 700,
    letterSpacing: '.5px',
    color: '#ffffff',
  },
  footer: {
    marginTop: '74px',
    textAlign: "right",
    [theme.breakpoints.down('md')]: {
      marginTop: '42px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  copyright: {
    fontSize: '16px',
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
        <Box className={classes.container}>
          <Box>
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


              <Grid item xs={12} lg={9}>
                <Grid container>
                  <Grid item xs={12} sm={4} md={2} className={classes.footerSection}>
                    <Box mb={3}>
                      <Typography variant="h6" className={classes.footerSectionTitle}>Listeners</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <Link href="/" className={classes.footerSectionLink}>
                        Where to Listen
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Support
                      </Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4} md={2} className={classes.footerSection}>
                    <Box mb={3}>
                      <Typography variant="h6" className={classes.footerSectionTitle}>Broadcasters</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
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
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4} md={2} className={classes.footerSection}>
                    <Box mb={3}>
                      <Typography variant="h6" className={classes.footerSectionTitle}>Company</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <Link href="/" className={classes.footerSectionLink}>
                        About
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Blog
                      </Link>
                      <Link href="/" className={classes.footerSectionLink}>
                        Jobs
                      </Link>
                    </Box>
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
