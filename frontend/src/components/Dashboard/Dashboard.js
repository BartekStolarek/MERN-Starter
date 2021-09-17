import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="uk-margin uk-animation-fade uk-padding uk-align-center uk-width-1-1 uk-container-xsmall">
            <h3 className="uk-heading-divider">Dashboard</h3>

            <div data-uk-alert className="uk-alert-primary">
              <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: info"></span>
              You are logged in! This is an example Dashboard page. You can logout by clicking the
              button in the top-right or view your profile information under &quot;Profile&quot; 
              option in the navbar.
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
