import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formError: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.isAlreadyLoggedIn();
  }

  isAlreadyLoggedIn() {
    try {
      const authToken = localStorage.getItem('auth_token');
      if (authToken) {
        this.props.history.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({
      formError: false,
    });

    const bodyData = {
      email: this.state.email,
      password: this.state.password,
    };

    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        url: process.env.REACT_APP_HOSTNAME + '/api/account/login',
        data: bodyData,
      });

      const authToken =  response.headers['auth-token'];
      console.log(response);

      if (response.status === 200 && authToken) {
        this.setState({
          email: '',
          password: '',
        });

        // Save bearer token to localStorage
        localStorage.setItem('auth_token', authToken);

        // Navigate user to dashboard
        this.props.history.push('/dashboard');
      } else {
        this.setState({
          formError: true,
        });
      }
    } catch (error) {
      this.setState({
        formError: true,
      });
    }
  }

  render() {
    const isFormError = this.state.formError;

    return (
      <div className="Login">
        <div className="uk-section uk-width-1-1 uk-section-muted uk-flex uk-flex-middle uk-animation-fade" data-uk-height-viewport>
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid>
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <h3 className="uk-card-title uk-text-center">
                  Welcome back!
                </h3>

                {isFormError ? (
                  <div data-uk-alert className="uk-alert-warning">
                    <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: warning"></span>
                    Your email or password is invalid. Please try again using valid credentials.
                  </div>
                ) : null}

                <form onSubmit={this.handleSubmit}>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: mail">
                      </span>
                      <input
                        className="uk-input uk-form-large"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: lock">
                      </span>
                      <input
                        className="uk-input uk-form-large"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">
                      Login
                    </button>
                  </div>
                  <div className="uk-text-small uk-text-center">
                  <span style={{ marginRight: '5px' }}>Not registered?</span>
                    <Link to="/signup">Create an account!</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
