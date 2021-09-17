import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmedPassword: '',
      formPasswordError: false,
      formError: false,
      formSuccess: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    if (this.state.password !== this.state.confirmedPassword) {
      this.setState({
        formPasswordError: true,
      });

      return;
    }

    this.setState({
      formError: false,
      formSuccess: false,
      formPasswordError: false,
    });

    const bodyData = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        url: process.env.REACT_APP_HOSTNAME + '/api/account/signup',
        data: bodyData,
      });

      if (response.status === 200) {
        this.setState({
          username: '',
          email: '',
          password: '',
          confirmedPassword: '',
          formSuccess: true
        });
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
    const isFormPasswordError = this.state.formPasswordError;
    const isFormError = this.state.formError;
    const isFormSuccess = this.state.formSuccess;

    return (
      <div className="Signup">
        <div className="uk-section uk-width-1-1 uk-section-muted uk-flex uk-flex-middle uk-animation-fade" data-uk-height-viewport>
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid>
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <h3 className="uk-card-title uk-text-center">Welcome!</h3>

                {isFormPasswordError ? (
                  <div data-uk-alert className="uk-alert-warning">
                    <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: warning"></span>
                    Your passwords do not match. Please enter two matching passwords in 
                    `&quot;`Password`&quot;` and `&quot;`Confirm Password`&quot;` fields.
                  </div>
                ) : null}

                {isFormError ? (
                  <div data-uk-alert className="uk-alert-warning">
                    <span
                      className="uk-icon uk-margin-small-right"
                      data-uk-icon="icon: warning">
                    </span>
                    An error occurred during signup. Please provide a
                    different email or password or try again later.
                  </div>
                ) : null}

                {isFormSuccess ? (
                  <div data-uk-alert className="uk-alert-success">
                    <span
                      className="uk-icon uk-margin-small-right"
                      data-uk-icon="icon: happy">
                    </span>
                    Congratulations, you have registered in our portal! You
                    can now log in using credentials used in signup.
                    <span style={{ marginLeft: '5px' }}>
                      <Link to="/login">Go to Login.</Link>
                    </span>
                  </div>
                ) : null}

                <form onSubmit={this.handleSubmit}>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon" uk-icon="icon: user"></span>
                      <input
                        className="uk-input uk-form-large"
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                    </div>
                  </div>

                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon" uk-icon="icon: mail"></span>
                      <input
                        className="uk-input uk-form-large"
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon" uk-icon="icon: lock"></span>
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
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon" uk-icon="icon: lock"></span>
                      <input
                        className="uk-input uk-form-large"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmedPassword"
                        value={this.state.confirmedPassword}
                        onChange={this.handleInputChange} />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="uk-button uk-button-primary uk-button-large uk-width-1-1" />
                  </div>
                  <div className="uk-text-small uk-text-center">
                    <span style={{ marginRight: '5px' }}>Already have an account?</span>
                    <Link to="/login">Login here</Link>
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

export default Signup;
