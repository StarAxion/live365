import React from 'react';
import { Redirect } from 'react-router-dom';
import Overview from './overview/Overview';

const Broadcast = () => (
  <>
    {window.location.href.endsWith('/broadcast/') &&
      <Redirect to='/broadcast' />
    }
    {window.location.href.endsWith('/broadcast') &&
      <Overview />
    }
    {window.location.href.endsWith('/am-fm') &&
      <h1>AM/FM</h1>
    }
    {window.location.href.endsWith('/audience') &&
      <h1>Audience</h1>
    }
    {window.location.href.endsWith('/licensing') &&
      <h1>Licensing</h1>
    }
    {window.location.href.endsWith('/monetization') &&
      <h1>Monetization</h1>
    }
    {window.location.href.endsWith('/pricing') &&
      <h1>Pricing</h1>
    }
    {window.location.href.endsWith('/statistics') &&
      <h1>Statistics</h1>
    }
  </>
)

export default Broadcast;
