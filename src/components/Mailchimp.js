import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

class Mailchimp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'mailchimpSignup', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    event.preventDefault();
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half-desktop" style={{ textAlign: 'center' }}>
          <h3 className="has-text-weight-bold">Want To Get Involved?</h3>
          <p>
            Subscribe to our newsletter to recieve updates on voting deadlines,
            ways to get involved, and additional information about the issues.
          </p>
          <form
            data-netlify="true"
            name="mailchimpSignup"
            onSubmit={this.handleSubmit}
          >
            <div className="field has-addons">
              <div className="control has-icons-left is-expanded">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div className="control">
                <input
                  type="submit"
                  className="button is-primary"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Mailchimp;