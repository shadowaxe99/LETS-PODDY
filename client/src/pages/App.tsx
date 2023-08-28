import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Upload from './Upload';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  );
}

export default App;