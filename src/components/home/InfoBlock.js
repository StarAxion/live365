import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const InfoBlock = (props) => (
  <>
    <Box display="flex" alignItems="center">
      <img src={props.icon} alt="icon"></img>
      <Box ml={3}>
        <Typography variant="h5" color="inherit">
          {props.title}
        </Typography>
      </Box>
    </Box>
    <Box mt={1} ml="88px">
      <Typography variant="body1" color="inherit">
        {props.text}
      </Typography>
    </Box>
  </>
)

export default InfoBlock;
