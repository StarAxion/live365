import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SectionIntro from '../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    background: '#0F0732',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '107px 0 155px',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '97px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '72px 0 266px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '72px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  leftHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '636px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '657px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '405px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  rightHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '370px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  title: {
    fontSize: '65px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  },
  par: {
    lineHeight: '42px',
    fontSize: '28px',
    [theme.breakpoints.down('lg')]: {
      lineHeight: '36px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '30px',
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '27px',
      fontSize: '18px',
    },
  },
  label: {
    fontFamily: 'BarlowBold',
    fontSize: '16px',
    color: 'inherit',
  },
  input: {
    height: '40px',
    margin: '9px 0 16px',
    padding: '0 10px',
    color: '#ffffff',
    border: 'solid 2px #696189',
    borderRadius: '4px',
  },
  textarea: {
    height: '150px',
    margin: '9px 0 16px',
    padding: '0 10px',
    color: '#ffffff',
    border: 'solid 2px #696189',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    height: '57px',
    fontFamily: 'BarlowBold',
    fontSize: '20px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#fd631c',
    borderRadius: '4px',
  },
}));

const ContactPart = (props) => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.leftHalf}>
              <SectionIntro
                width={{ xs: '100%', sm: '443px', md: '100%', lg: '530px', xl: '100%' }}
                margin='0'
                mbTitle={{ xs: '42px', lg: '65px', xl: '60px' }}
                title='Join the world`s radio.'
                titleClass={classes.title}
                mbPar={{ xs: '52px', sm: '128px', md: '0' }}
                par='Any questions? Reach out to a Live365 product consultant to discuss your broadcasting needs.'
                parClass={classes.par}
              />
            </Grid>

            <Grid item xs={12} md={6} className={classes.rightHalf}>
              <Box maxWidth={{ xs: '100%', sm: '370px', md: '100%' }} margin="0 auto">
                <form onSubmit={preventDefault}>
                  <FormLabel
                    style={{ marginBottom: '12px', textTransform: props.textTransform }}
                    className={classes.label}
                  >
                    First name
                    </FormLabel>
                  <InputBase
                    type="text"
                    name="firstName"
                    fullWidth={true}
                    required={true}
                    className={classes.input}
                  />

                  <FormLabel
                    style={{ textTransform: props.textTransform }}
                    className={classes.label}
                  >
                    Last name
                    </FormLabel>
                  <InputBase
                    type="text"
                    name="lastName"
                    fullWidth={true}
                    required={true}
                    className={classes.input}
                  />

                  <FormLabel
                    style={{ textTransform: props.textTransform }}
                    className={classes.label}
                  >
                    Email address
                    </FormLabel>
                  <InputBase
                    type="email"
                    name="email"
                    fullWidth={true}
                    required={true}
                    className={classes.input}
                  />

                  <FormLabel
                    style={{ textTransform: props.textTransform }}
                    className={classes.label}
                  >
                    Phone number
                    </FormLabel>
                  <InputBase
                    type="tel"
                    name="phone"
                    fullWidth={true}
                    required={true}
                    className={classes.input}
                  />

                  <FormLabel
                    style={{ textTransform: props.textTransform }}
                    className={classes.label}
                  >
                    Message
                    </FormLabel>
                  <InputBase
                    multiline={true}
                    rows={6}
                    name="message"
                    fullWidth={true}
                    required={true}
                    variant="outlined"
                    className={classes.textarea}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Get in touch
                    </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default ContactPart;
