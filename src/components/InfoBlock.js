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
  },
  par: {
    textAlign: 'left',
  },
}));

const InfoBlock = (props) => {
  const classes = useStyles();

  return (
    <Box mb={props.mb}>
      <Link to={props.link} className={classes.link}>
        <Box display="flex" flexDirection={props.direction} alignItems="center">
          <Box display="flex" justifyContent="center" width={props.iconWidth}>
            <img src={props.icon} alt="icon" className={classes.icon}></img>
          </Box>
          <Box ml={props.mlTitle} mt={props.mtTitle}>
            <Typography variant="h3" className={`${classes.title} ${props.titleClass}`}>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box ml={props.mlText} mt={props.mtText}>
        <Typography variant="body1" className={`${classes.par} ${props.parClass}`}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default InfoBlock;
