import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
  package: {
    maxWidth: '412px',
    padding: '22px 0 27px',
    textAlign: 'center',
    color: '#161616',
    border: 'solid .5px #CBC9D4',
    borderRadius: '8px',
  },
  title: {
    fontFamily: 'BarlowExtraBold',
    fontSize: '16px',
    letterSpacing: '1.14px',
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: '16px',
    color: '#656565',
  },
  icon: {
    paddingBottom: '5px',
  },
  number: {
    marginRight: '7px',
    fontFamily: 'BarlowExtraBold',
    fontSize: '36px',
  },
  par: {
    fontSize: '20px',
  },
  list: {
    padding: '0 37px 0 24px',
    textAlign: 'left',
  },
  listTitle: {
    margin: 0,
    padding: '0 0 14px',
    lineHeight: '16px',
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    width: '12px',
    height: '12px',
    margin: '0 21px 0 7px',
    background: '#FD6923',
    borderRadius: '50%',
  },
  listItemText: {
    margin: 0,
    '& *': {
      fontSize: '20px',
      lineHeight: '36px',
    },
  },
}));

const Package = () => {
  const classes = useStyles();
  const list = ['Custom mobile app',
    'Custom web player',
    'US licensing coverage and reporting',
    'Cloud-based backup',
    'Ad network with revenue share'];

  return (
    <Paper variant="outlined" className={classes.package}>
      <Typography variant="h3" className={classes.title}>
        AM/FM Broadcasting
      </Typography>

      <Box mt="29px" mb="33px">
        <Typography variant="h3" className={classes.subTitle}>
          Starting at
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <AttachMoneyIcon className={classes.icon} />
          <Box component="span" className={classes.number}>79</Box>
          <Typography variant="body1" className={classes.par}>/month</Typography>
        </Box>
      </Box>

      <List
        component="ul"
        aria-labelledby="package-list"
        subheader={
          <ListSubheader component="h3" id="package-list" className={`${classes.subTitle} ${classes.listTitle}`}>
            Your package can include:
          </ListSubheader>
        }
        className={classes.list}
      >
        {list.map((item, index) => (
          <ListItem key={index} className={classes.listItem}>
            <Box className={classes.listItemIcon} />
            <ListItemText primary={item} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Package;
