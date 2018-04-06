import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

const SignupText = ({ isSubmitted }) => {
  if (isSubmitted === true) {
    return [
      <h3 key="0" className="has-text-weight-bold">
        Thanks for signing up!
      </h3>,
      <p key="1">
        We've received your email and we're excited to have you on board.
      </p>,
    ];
  }
  return [
    <h3 key="0" className="has-text-weight-bold">
      Want To Get Involved?
    </h3>,
    <p key="1">
      Subscribe to our newsletter to recieve updates on voting deadlines, ways
      to get involved, and additional information about the issues.
    </p>,
  ];
};

class Mailchimp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isSubmitted: false,
    };
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const toSend = this.encode({
      'form-name': 'mailchimpSignup',
      ...this.state,
    });

    const data = fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: toSend,
    })
      .then(() => {
        this.setState({ isSubmitted: true });
      })
      .catch(error => {
        alert(
          `Something went wrong while submitting your email address: ${
            error.message
          }`
        );
      });

    event.preventDefault();
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half-desktop" style={{ textAlign: 'center' }}>
          <SignupText isSubmitted={this.state.isSubmitted} />
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
                  disabled={this.state.isSubmitted}
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
