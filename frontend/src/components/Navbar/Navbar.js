import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('auth_token');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="uk-navbar-container uk-grid uk-section-muted uk-card-default" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo">
              MERN Starter
            </Link>
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/dashboard">
                  <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: home"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: user"></span>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <button className="uk-button uk-button-default" onClick={this.handleLogout}>
                <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: sign-out"></span>
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
