import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DoneIcon from '@material-ui/icons/Done';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  package: {
    maxWidth: '351px',
    padding: '19px 0 27px',
    color: '#020104',
    border: 'solid 1px #CDCDCD',
    borderRadius: '8px',
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
    padding: '16px 17px 30px 25px',
    textAlign: 'left',
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(2),
    color: '#ffffff',
    background: '#74C631',
    borderRadius: '50%',
  },
  listItemText: {
    margin: 0,
    '& *': {
      fontSize: '18px',
      lineHeight: '36px',
    },
  },
  button: {
    height: '57px',
    padding: '0 27.5px',
    fontFamily: 'BarlowBold',
    fontSize: '20px',
    letterSpacing: '0.24px',
    textTransform: 'none',
    background: '#2E206E',
    borderRadius: '5px',
  },
}));

const Package = (props) => {
  const classes = useStyles();

  return (
    <Box m={props.margin}>
      <Paper variant="outlined" className={classes.package}>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <AttachMoneyIcon className={classes.icon} />
          <Box component="span" className={classes.number}>{props.price}</Box>
          <Typography variant="body1" className={classes.par}>/month</Typography>
        </Box>

        <List
          component="ul"
          className={classes.list}
        >
          {props.list.map((item, index) => (
            <ListItem key={index} className={classes.listItem}>
              <Box className={classes.listItemIcon}>
                <DoneIcon fontSize="small" />
              </Box>
              <ListItemText primary={item} className={classes.listItemText} />
            </ListItem>
          ))}
        </List>

        <Button variant="contained" color="primary" className={classes.button}>
          Select package
        </Button>
      </Paper>
    </Box>
  )
}

export default Package;
