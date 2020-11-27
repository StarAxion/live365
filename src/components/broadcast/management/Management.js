import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SectionIntro from '../../SectionIntro';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#020104',
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      padding: '196px 0 610px',
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '32px',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '51px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  title: {
    fontSize: '40px',
  },
  par: {
    lineHeight: '27px',
    fontSize: '18px',
  },
}));

const Management = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container fixed>
        <Box className={classes.container}>
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='55px'
            title='Manage your stations with ease.'
            titleClass={classes.title}
            mbPar='50px'
            par='Between your scheduled shows, live broadcasts and Auto DJ, you can make sure your listeners are always able to tune in. We provide you with the tools you need to build and manage the station you’ve always wanted.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='67px'
            title='Manage media'
            titleClass={classes.title}
            mbPar='50px'
            par='Our web-based media management tool makes it easy to upload new tracks to your library and manage all of your content. Use our tagging system to further organize your station’s content.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='59px'
            title='Create playlists'
            titleClass={classes.title}
            mbPar='50px'
            par='Easily create legal playlists with our drag-and-drop interface.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='59px'
            title='LiveDJ'
            titleClass={classes.title}
            mbPar='50px'
            par='Broadcast live to your station from anywhere. We support a wide variety of Icecast2 streaming tools.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='59px'
            title='AutoDJ'
            titleClass={classes.title}
            mbPar='50px'
            par='The Live365 AutoDJ fills in any gaps in your schedule or you can just let it run to without having to schedule anything.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='11px'
            title='Schedule events'
            titleClass={classes.title}
            mbPar='50px'
            par='Quickly setup an advance schedule of your station’s shows and playlists.'
            parClass={classes.par}
          />
          <SectionIntro
            width={{ xs: '100%', sm: '288px' }}
            margin='0'
            mbTitle='11px'
            title='Listener restrictions'
            titleClass={classes.title}
            mbPar='0'
            par='Live365 provides you total control over your station listening. With Geoblocking, IP Banning, and Session Duration settings you can tailor your audience and listening as you please.'
            parClass={classes.par}
          />
        </Box>
      </Container>
    </section>
  )
}

export default Management;
