import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ButtonLink from '../../ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F5F5F7',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '127px 0 37px',
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '733px',
    margin: '0 auto',
    padding: '29px 32px 30px 32px',
    border: 'solid 1px #CDCDCD',
    borderRadius: '8px',
    boxSizing: 'border-box',
    boxShadow: 'none',
    '& *': {
      padding: 0,
    }
  },
  cardTitle: {
    marginBottom: '17px',
    fontFamily: 'BarlowBold',
    fontSize: '24px',
    color: '#0F0732',
  },
  cardPar: {
    fontSize: '18px',
    color: '#0F0732',
  },
}));

const CardPart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h3" className={classes.cardTitle}>
              7-day free trial
            </Typography>
            <Typography variant="body1" className={classes.cardPar}>
              No credit card required.
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonLink
              margin='0'
              link='/'
              height='57px'
              padding='0 26px'
              fontFamily='BarlowBold'
              bg='#FD631C'
              radius='5px'
            >
              Try it free
            </ButtonLink>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default CardPart;
