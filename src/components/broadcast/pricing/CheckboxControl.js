import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '356px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '11px',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  checkbox: {
    marginRight: theme.spacing(2),
    padding: 0,
    '& *': {
      width: '20px',
      height: '20px',
      borderRadius: '2px',
    },
  },
  icon: {
    background: '#554D76',
  },
  checkedIcon: {
    '&:before': {
      display: 'block',
      content: '""',
      width: 'inherit',
      height: 'inherit',
      backgroundColor: '#FD6923',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      borderRadius: 'inherit',
    },
  },
  label: {
    fontSize: '18px',
    color: '#ffffff',
  },
  par: {
    fontSize: '16px',
    color: '#BBB9C0',
  },
}));

const CheckboxControl = (props) => {
  const classes = useStyles();

  return (
    <Box mb={props.mb} className={classes.container}>
      <FormControlLabel
        control={<Checkbox
          checked={props.checked}
          onChange={props.onChange}
          disableRipple
          color="default"
          checkedIcon={<span className={classes.checkedIcon} />}
          icon={<span className={classes.icon} />}
          className={classes.checkbox}
        />}
        label={
          <Box component="span" className={classes.label}>
            {props.label}
          </Box>
        }
        labelPlacement="end"
      />
      <Box maxWidth="320px" ml="26px" mt={1}>
        <Typography variant="body2" className={classes.par}>
          {props.par}
        </Typography>
      </Box>
    </Box>
  )
}

export default CheckboxControl;
