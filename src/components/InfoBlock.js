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
  title: {
    fontSize: '32px',
  },
  text: {
    fontSize: '16px',
  },
}));

const InfoBlock = (props) => {
  const classes = useStyles();

  return (
    <>
      <Link to={props.link} className={classes.link}>
        <Box display="flex" alignItems="center">
          <Box bgcolor={props.color} className={classes.imageBox}>
            <img src={props.icon} alt="icon"></img>
          </Box>
          <Box ml={3}>
            <Typography variant="h5" className={classes.title}>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box mt={1} ml="88px">
        <Typography variant="body1" className={classes.text}>
          {props.text}
        </Typography>
      </Box>
    </>
  )
}

export default InfoBlock;
