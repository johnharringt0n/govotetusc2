import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

function SignupButton({ loading, submitted }) {
  if (loading) {
    return <button className="button is-primary is-loading">Subscribe</button>;
  } else if (submitted) {
    return (
      <button className="button is-success" disabled>
        You're Subscribed!
      </button>
    );
  }
  return <button className="button is-primary">Subscribe</button>;
}

class Mailchimp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isSubmitted: false,
      isLoading: false,
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
    event.preventDefault();

    if (this.state.email === '') {
      alert('Please fill in your email first!');
      return;
    }

    this.setState({ isLoading: true });

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
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isSubmitted: true,
          });
        }, 1000);
      })
      .catch(error => {
        alert(
          `Something went wrong while submitting your email address: ${
            error.message
          }`
        );
      });
  };

  render() {
    return (
      <div style={{ width: '100%', maxWidth: '600px', margin: '20px 0px' }}>
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
                placeholder="Subscribe to the GoVoteTusc newsletter"
                onChange={this.handleChange}
                disabled={this.state.isSubmitted}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className="control">
              <SignupButton
                loading={this.state.isLoading}
                submitted={this.state.isSubmitted}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Mailchimp;
