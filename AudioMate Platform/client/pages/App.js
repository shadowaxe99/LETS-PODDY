import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AudioPage from './AudioPage';
import UserPage from './UserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/audio" component={AudioPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;