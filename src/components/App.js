import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../styles/App.css';
import Home from './home/Home';
import Listen from './listen/Listen';
import Broadcast from './broadcast/Broadcast';
import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/listen' component={Listen} />
        <Route exact path='/broadcast' component={Broadcast} />
        <Route exact path='/broadcast/audience' component={Broadcast} />
        <Route exact path='/broadcast/licensing' component={Broadcast} />
        <Route exact path='/broadcast/monetization' component={Broadcast} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={LogIn} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App;
