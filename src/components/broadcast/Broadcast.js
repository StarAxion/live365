import React from 'react';

const Broadcast = () => {

  return (
    <>
      <h1>Broadcast</h1>

      {window.location.href.endsWith('/audience') &&
        <h2>Audience</h2>
      }
      {window.location.href.endsWith('/licensing') &&
        <h2>Licensing</h2>
      }
      {window.location.href.endsWith('/monetization') &&
        <h2>Monetization</h2>
      }
    </>
  )
}

export default Broadcast;
