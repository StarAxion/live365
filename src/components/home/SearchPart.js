import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListenNowButton from './ListenNowButton';
import TitlesBlock from './TitlesBlock';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    background: '#06012e',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '130px auto 0',
    border: 'solid 2px #f1f0f5',
    borderRadius: '5px',
    background: 'inherit',
  },
  input: {
    width: 'inherit',
    padding: '0 25px',
    color: '#f1f0f5',
    '&::placeholder': {
      color: '#f1f0f5',
    },
  },
  iconButton: {
    padding: '10px 15px',
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
      <Container fixed>
        <div className={classes.outerContainer}>
          <div className={classes.innerContainer}>
            <Box padding="215px 0">
              <TitlesBlock
                title='Start listening for free.'
                subtitle='Every station is made by a real human.'
              />
              <Grid container spacing={0} justify="center">
                <Grid item xs={12} sm={7} md={5} lg={4} xl={4}>
                  <Paper component="form" className={classes.searchForm}>
                    <InputBase
                      className={classes.input}
                      placeholder="Search stations &amp; genres"
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
              <Box mt="48px">
                <ListenNowButton />
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default SearchPart;
