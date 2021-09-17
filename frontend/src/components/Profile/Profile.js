import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestError: false,
      user: {
        name: '',
        email: '',
        signupDate: ''
      },
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  async getProfile() {
    try {
      const authToken = localStorage.getItem('auth_token');

      const response = await axios({
        method: 'GET',
        headers: {
          'auth-token': authToken
        },
        url: process.env.REACT_APP_HOSTNAME + '/api/profile',
      });

      this.setState({
        user: response.data.user,
        requestError: false
      });
    } catch (error) {
      this.setState({
          requestError: true
      });
    }
  }

  render() {
    const isRequestError = this.state.requestError;

    return (
      <div className="Profile">
        <div className="uk-margin-top uk-animation-fade uk-padding">
          <h3 className="uk-heading-divider">Profile</h3>

          {isRequestError ? (
            <div data-uk-alert className="uk-alert-warning">
              <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: warning"></span>
              An error occured while loading profile information. Please try again later.
            </div>
          ) : (
            <ul className="uk-list uk-list-striped">
            <li>Username: {this.state.user.name}</li>
            <li>Email: {this.state.user.email}</li>
            <li>Signup Date: {this.state.user.signupDate}</li>
          </ul>)}

        </div>
      </div>
    );
  }
}

export default Profile;
