import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
}));

const ImageLink = (props) => {
  const classes = useStyles();

  return (
    <Link
      to={props.link}
      className={classes.card}
      style={{
        border: props.border,
        borderRadius: props.br
      }}
    >
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
