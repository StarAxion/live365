import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  icon: {
    width: '112%',
  },
  title: {
    fontFamily: 'BarlowBold',
    fontSize: '28px',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  text: {
    fontSize: '20px',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
}));

const InfoBlock = (props) => {
  const classes = useStyles();

  return (
    <Box mb={props.mb}>
      <Link to={props.link} className={classes.link}>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" width={{ xs: '50px', lg: '65px' }}>
            <img src={props.icon} alt="icon" className={classes.icon}></img>
          </Box>
          <Box ml={{ xs: '16px', lg: '35px' }}>
            <Typography variant="h3" className={classes.title}>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box mt={1} ml={{ xs: '66px', lg: '100px' }}>
        <Typography variant="body1" className={classes.text}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default InfoBlock;
