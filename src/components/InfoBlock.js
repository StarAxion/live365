import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  imageBox: {
    borderRadius: '50%',
  },
  icon: {
    width: 'inherit',
  },
  title: {
    fontSize: '32px',
    textAlign: 'left',
  },
  text: {
    fontSize: '16px',
    textAlign: 'left',
  },
}));

const InfoBlock = (props) => {
  const classes = useStyles();

  return (
    <>
      <Link to={props.link} className={classes.link}>
        <Box display="flex" alignItems="center">
          <Box width={{ xs: '50px', lg: '65px' }} bgcolor={props.color} className={classes.imageBox}>
            <img src={props.icon} alt="icon" className={classes.icon}></img>
          </Box>
          <Box ml={{ xs: '15px', lg: '35px' }}>
            <Typography variant="h5" className={classes.title}>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box mt={1} ml={{ xs: '65px', lg: '100px' }}>
        <Typography variant="body1" className={classes.text}>
          {props.text}
        </Typography>
      </Box>
    </>
  )
}

export default InfoBlock;
