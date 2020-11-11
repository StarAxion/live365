import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  block: {
    position: 'absolute',
    width: '101%',
    height: '101%',
    borderRadius: '8px',
  },
  topLeftStrong: {
    background: 'linear-gradient(to top left, transparent 0%, transparent 10%, #06012e 80%)',
  },
  topLeftLight: {
    background: 'linear-gradient(to top left, transparent 0%, transparent 10%, #06012e 100%)',
  },
  topRightStrong: {
    background: 'linear-gradient(to top right, transparent 0%, transparent 10%, #06012e 80%)',
  },
  topRightLight: {
    background: 'linear-gradient(to top right, transparent 0%, transparent 10%, #06012e 100%)',
  },
  bottomLeftStrong: {
    background: 'linear-gradient(to bottom left, transparent 0%, transparent 10%, #06012e 80%)',
  },
  bottomLeftLight: {
    background: 'linear-gradient(to bottom left, transparent 0%, transparent 10%, #06012e 100%)',
  },
  bottomRightStrong: {
    background: 'linear-gradient(to bottom right, transparent 0%, transparent 10%, #06012e 80%)',
  },
  bottomRightLight: {
    background: 'linear-gradient(to bottom right, transparent 0%, transparent 10%, #06012e 100%)',
  },
}));

export const TopLeftStrong = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.topLeftStrong}`}></Box>
  )
}

export const TopLeftLight = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.topLeftLight}`}></Box>
  )
}

export const TopRightStrong = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.topRightStrong}`}></Box>
  )
}

export const TopRightLight = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.topRightLight}`}></Box>
  )
}

export const BottomLeftStrong = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.bottomLeftStrong}`}></Box>
  )
}

export const BottomLeftLight = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.bottomLeftLight}`}></Box>
  )
}

export const BottomRightStrong = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.bottomRightStrong}`}></Box>
  )
}

export const BottomRightLight = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.block} ${classes.bottomRightLight}`}></Box>
  )
}
