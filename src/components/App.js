import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/App.css';
import Home from './home/Home';
import Listen from './listen/Listen';
import Overview from './broadcast/overview/Overview';
import Broadcast from './broadcast/Broadcast';
import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Barlow',
      'sans-serif',
    ].join(','),
  },
  props: {
    MuiLink: {
      underline: 'none'
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/listen' component={Listen} />
          <Route exact path='/broadcast' component={Overview} />
          <Route exact path='/broadcast/am-fm' component={Broadcast} />
          <Route exact path='/broadcast/management' component={Broadcast} />
          <Route exact path='/broadcast/audience' component={Broadcast} />
          <Route exact path='/broadcast/licensing' component={Broadcast} />
          <Route exact path='/broadcast/statistics' component={Broadcast} />
          <Route exact path='/broadcast/monetization' component={Broadcast} />
          <Route exact path='/broadcast/pricing' component={Broadcast} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={LogIn} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
