import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import './App.css';

const isAuthenticated = () => {
  return localStorage.getItem('auth_token');
};

const PublicRoute = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
        <Component {...props} />
      )} />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to the login page
      <Route {...rest} render={props => (
          isAuthenticated() ?
              <div>
                <Navbar />
                <Component {...props} />
              </div>
          : <Redirect to="/login" />
      )} />
  );
};

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
