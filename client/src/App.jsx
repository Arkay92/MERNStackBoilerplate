import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;