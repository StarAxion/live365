import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ColoredBlock from '../ColoredBlock';
import { TopLeftStrong, TopLeftLight, TopRightLight, BottomRightLight } from '../GradientCover';
import ListenNowButton from './ListenNowButton';
import TitlesBlock from '../TitlesBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    color: '#ffffff',
    background: '#06012e',
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
    margin: '130px auto 48px',
    border: 'solid 2px #f1f0f5',
    borderRadius: '5px',
    background: 'inherit',
    zIndex: '3',
    [theme.breakpoints.down('xl')]: {
      width: '525px',
    },
    [theme.breakpoints.down('lg')]: {
      width: '365px',
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '15px',
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
        <Box display={{ xs: 'none', xl: 'block' }}>
          <ColoredBlock size='255px' color='#2143ec' left='67px' top='285px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='110px' color='#eed30c' left='212px' top='750px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='67px' color='#4722e0' left='322px' top='125px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='138px' color='#fd6316' left='320px' top='538px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='110px' color='#b91117' left='388px' top='15px' >
            <TopLeftLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', lg: 'block', xl: 'none' }}>
          <ColoredBlock size='228px' color='#2143ec' left='-102px' top='272px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='96px' color='#eed30c' left='30px' bottom='-18px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='58px' color='#4722e0' left='126px' top='128px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='125px' color='#fd6316' left='126px' top='500px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='100px' color='#b91117' left='185px' top='30px' >
            <TopLeftLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', md: 'block', lg: 'none' }}>
          <ColoredBlock size='230px' color='#2143ec' left='-155px' bottom='80px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='123px' color='#fd6316' left='75px' bottom='-45px' >
            <TopRightLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', sm: 'block', md: 'none' }}>
          <ColoredBlock size='140px' color='#2143ec' left='-67px' bottom='48px'>
            <TopLeftStrong />
          </ColoredBlock>
          <ColoredBlock size='75px' color='#fd6316' left='73px' bottom='-27px' >
            <TopRightLight />
          </ColoredBlock>
        </Box>
      </div>



      <div className={classes.innerContainer}>
        <Container fixed>
          <TitlesBlock
            title='Start listening for free.'
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
          <ListenNowButton />
        </Container>
      </div >



      <div className={classes.outerContainer}>
        <Box display={{ xs: 'none', xl: 'block' }}>
          <ColoredBlock size='342px' color='#90ca03' right='35px' top='168px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='255px' color='#0edbee' right='258px' bottom='-50px'>
            <TopLeftLight />
          </ColoredBlock>
          <ColoredBlock size='138px' color='#d13eeb' right='378px' top='30px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='65px' color='#4722e0' right='376px' top='510px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='110px' color='#b71117' right='515px' bottom='205px' >
            <TopLeftLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', lg: 'block', xl: 'none' }}>
          <ColoredBlock size='306px' color='#90ca03' right='-244px' top='168px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='228px' color='#0edbee' right='-44px' bottom='-88px'>
            <TopLeftLight />
          </ColoredBlock>
          <ColoredBlock size='123px' color='#d13eeb' right='62px' top='45px' >
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='60px' color='#4722e0' right='62px' top='473px' >
            <BottomRightLight />
          </ColoredBlock>
          <ColoredBlock size='100px' color='#b71117' right='185px' bottom='142px' >
            <TopRightLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', md: 'block', lg: 'none' }}>
          <ColoredBlock size='306px' color='#90ca03' right='-249px' top='186px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='123px' color='#d13eeb' right='58px' top='62px' >
            <TopRightLight />
          </ColoredBlock>
        </Box>

        <Box display={{ xs: 'none', sm: 'block', md: 'none' }}>
          <ColoredBlock size='188px' color='#90ca03' right='-162px' top='42px'>
            <TopRightLight />
          </ColoredBlock>
          <ColoredBlock size='75px' color='#d13eeb' right='26px' top='-33px' >
            <TopRightLight />
          </ColoredBlock>
        </Box>
      </div>
    </div >
  )
}

export default SearchPart;
