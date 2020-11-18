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
  footerSections: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
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
    color: '#94929B',
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    color: '#94929B',
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container fixed>
        <Box padding={props.containerPadding}>
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
              <Box justifyContent={props.justifyFooterSections} className={classes.footerSections}>
                {props.children}
              </Box>
            </Grid>
          </Grid>


          <Box display="flex" flexDirection={props.bottomPartDirection} justifyContent="flex-end" className={classes.footerBottomPart}>
            <Box order={props.copyrightOrder} ml={props.ml} mb={props.mb}>
              <Typography variant="body2" className={classes.copyright}>&copy; 2020 Live365</Typography>
            </Box>

            <Box order={props.linksOrder} className={classes.links}>
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
