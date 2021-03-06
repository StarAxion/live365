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
      padding: '105px 0 156px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '102px 0 97px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '60px 0 266px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '71px',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  leftHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '641px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '515px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  rightHalf: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '368px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  title: {
    fontSize: '65px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('md')]: {
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
            <Grid item xs={12} md={7} className={classes.leftHalf}>
              <SectionIntro
                width={{ xs: '100%', sm: '443px', lg: '538px', xl: '100%' }}
                margin='0'
                mbTitle={{ xs: '28px', sm: '26px', md: '24px', lg: '44px', xl: '35px' }}
                title='Join the world`s radio.'
                titleClass={classes.title}
                parWidth={{ xl: '460px' }}
                mbPar={{ xs: '42px', sm: '119px', md: '0' }}
                par='Any questions? Reach out to a Live365 product consultant to discuss your broadcasting needs.'
                parClass={classes.par}
              />
            </Grid>

            <Grid item xs={12} md={5} className={classes.rightHalf}>
              <Box maxWidth={{ xs: '100%', sm: '368px' }} margin="0 auto">
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
