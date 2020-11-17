import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#020104',
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
      marginBottom: '48px',
    },
  },
  footerInfoLogo: {
    marginBottom: '48px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  },
  logo: {
    maxWidth: "102px",
  },
  footerInfoText: {
    lineHeight: '20px',
    fontSize: '16px',
  },
  socialLink: {
    marginRight: theme.spacing(3),
    color: 'inherit',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '32px',
    },
  },
  footerSectionTitle: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#94929B',
  },
  footerSectionLink: {
    marginBottom: theme.spacing(1.25),
    fontFamily: 'BarlowBold',
    fontSize: '18px',
    color: '#ffffff',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  footerBottomPart: {
    marginTop: '62px',
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
    color: '#94929b',
    marginBottom: theme.spacing(1),
  },
  links: {
    color: '#a19eb1',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    color: '#94929b',
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
              <Grid item xs={12} lg={3} className={classes.footerInfo}>
                <div className={classes.footerInfoLogo}>
                  <Link href="/">
                    <img src="../img/logo.png" alt="logo" className={classes.logo} />
                  </Link>
                </div>
                <Box mb={{ xs: '24px', lg: '48px' }} width={{ xs: '100%', sm: '276px', lg: '100%' }}>
                  <Typography variant="body2" className={classes.footerInfoText}>
                    Live 365 is the easiest way to create an online radio station and discover hundreds of stations from every style of music and talk.
                  </Typography>
                </Box>
                <Box>
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener" className={classes.socialLink}>
                    <FacebookIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" rel="noopener" className={classes.socialLink}>
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" rel="noopener" className={classes.socialLink}>
                    <InstagramIcon fontSize="large" />
                  </Link>
                </Box>
              </Grid>


              <Grid item xs={12} lg={9}>
                <Grid container>
                  <Grid item xs={12} sm={4} md={2} className={classes.footerSection}>
                    <Box mb={{ xs: '16px', sm: '23px' }}>
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
                    <Box mb={{ xs: '16px', sm: '23px' }}>
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
                    <Box mb={{ xs: '16px', sm: '23px' }}>
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


          <Box className={classes.footerBottomPart}>
            <Typography variant="body2" className={classes.copyright}>&copy; 2020 Live365</Typography>
            <Box className={classes.links}>
              <Link href="/" className={classes.link}>
                Terms
              </Link>
              <Link href="/" className={classes.link}>
                DMCA
              </Link>
              <Link href="/" className={classes.link}>
                Privacy
              </Link>
              <Link href="/" className={classes.link}>
                Cookies
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer;
