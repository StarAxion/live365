import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ColoredBlock from '../ColoredBlock';
import { TopLeftStrong, TopLeftLight, TopRightLight } from '../GradientCover';
import TitlesBlock from '../TitlesBlock';
import ButtonLink from '../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#0F0732',
  },
  outerContainer: {
    position: 'relative',
  },
  innerContainer: {
    [theme.breakpoints.down('xl')]: {
      padding: '210px 0 218px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '178px 0 230px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '115px 0 128px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '92px 0 102px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '62px 0 15px',
    },
  },
  searchForm: {
    position: 'relative',
    display: 'flex',
    height: '65px',
    margin: '0 auto',
    border: 'solid 2px #f1f0f5',
    borderRadius: '5px',
    background: 'inherit',
    zIndex: '3',
    [theme.breakpoints.down('xl')]: {
      width: '525px',
    },
    [theme.breakpoints.down('lg')]: {
      width: '365px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  inputBase: {
    width: '100%',
    padding: '0 25px',
  },
  input: {
    fontSize: '18px',
    color: '#f1f0f5',
    '&::placeholder': {
      fontSize: '18px',
      letterSpacing: '.5px',
      color: '#f1f0f5',
      opacity: .8,
    },
  },
  iconButton: {
    padding: '10px 15px 10px 0',
    color: '#f1f0f5',
  },
  button: {
    padding: '20px 40px',
    textTransform: 'none',
    color: '#ffffff',
    background: '#234bff',
  },
}));

const SearchPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outerContainer}>
        <Box display={{ xs: 'none', lg: 'block' }}>
          <ColoredBlock size={{ lg: '228px', xl: '255px' }} color='#284CFF' left={{ lg: '-102px', xl: '67px' }} top={{ lg: '272px', xl: '285px' }}>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '97px', xl: '109px' }} color='#FFE211' left={{ lg: '30px', xl: '212px' }} top={{ xl: '750px' }} bottom={{ lg: '-18px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '59px', xl: '66px' }} color='#4826DF' left={{ lg: '126px', xl: '322px' }} top={{ lg: '128px', xl: '125px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '123px', xl: '138px' }} color='#FD631C' left={{ lg: '126px', xl: '320px' }} top={{ lg: '500px', xl: '538px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '97px', xl: '109px' }} color='#CD1A1A' left={{ lg: '185px', xl: '388px' }} top={{ lg: '30px', xl: '15px' }} >
            <TopLeftLight />
          </ColoredBlock>

          <ColoredBlock size={{ lg: '306px', xl: '343px' }} color='#9CDD07' right={{ lg: '-244px', xl: '35px' }} top={{ lg: '168px', xl: '168px' }}>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '228px', xl: '255px' }} color='#16DAED' right={{ lg: '-44px', xl: '258px' }} bottom={{ lg: '-88px', xl: '-50px' }}>
            <TopLeftLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '123px', xl: '138px' }} color='#D040EA' right={{ lg: '62px', xl: '378px' }} top={{ lg: '45px', xl: '30px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '59px', xl: '66px' }} color='#4826DF' right={{ lg: '62px', xl: '376px' }} top={{ lg: '473px', xl: '510px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ lg: '97px', xl: '109px' }} color='#CD1A1A' right={{ lg: '185px', xl: '515px' }} bottom={{ lg: '142px', xl: '205px' }} >
            <TopLeftLight />
          </ColoredBlock>
        </Box>


        <Box display={{ xs: 'none', sm: 'block', lg: 'none' }}>
          <ColoredBlock size={{ sm: '140px', md: '228px' }} color='#284CFF' left={{ sm: '-67px', md: '-155px' }} bottom={{ sm: '48px', md: '80px' }} >
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size={{ sm: '74px', md: '123px' }} color='#FD631C' left={{ sm: '73px', md: '75px' }} bottom={{ sm: '-27px', md: '-45px' }} >
            <TopRightLight />
          </ColoredBlock>

          <ColoredBlock size={{ sm: '186px', md: '306px' }} color='#9CDD07' right={{ sm: '-162px', md: '-249px' }} top={{ sm: '42px', md: '186px' }} >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size={{ sm: '74px', md: '123px' }} color='#D040EA' right={{ sm: '26px', md: '58px' }} top={{ sm: '-33px', md: '62px' }} >
            <TopRightLight />
          </ColoredBlock>
        </Box>

        <div className={classes.innerContainer}>
          <Container fixed>
            <TitlesBlock
              width='100%'
              margin='auto'
              mbTitle={{ xs: '48px', lg: '50px', xl: '75px' }}
              alignTitle='center'
              title='Start listening for free.'
              mbSubitle={{ xs: '75px', sm: '88px', md: '104px', lg: '100px', xl: '138px' }}
              alignSubtitle='center'
              subtitle='Every station is made by a real human.'
            />

            <Paper component="form" className={classes.searchForm}>
              <InputBase
                className={classes.inputBase}
                classes={{ input: classes.input }}
                placeholder="Search stations &amp; genres"
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon fontSize="large" />
              </IconButton>
            </Paper>

            <ButtonLink
              justify='center'
              margin={{ xs: '16px 0 0 0', sm: '24px 0 0 0', xl: '48px 0 0 0' }}
              bg='#234bff'
              color='primary'
              link='/listen'
            >
              Listen now
            </ButtonLink>
          </Container>
        </div >
      </div>
    </div >
  )
}

export default SearchPart;
