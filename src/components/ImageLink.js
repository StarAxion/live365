import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ImageLink = (props) => {
  const classes = useStyles();

  return (
    <Link to={props.link} className={classes.card}>
      {props.children}
      <CardMedia
        width='inherit'
        component="img"
        image={props.image}
      />
    </Link>
  )
}

export default ImageLink;
