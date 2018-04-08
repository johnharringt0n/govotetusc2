import React from 'react';

import PageHeader from '../../components/PageHeader';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      isSubmitted: false,
      name: '',
      email: '',
      message: '',
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
    const data = fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contactForm', ...this.state }),
    })
      .then(() => {
        this.setState({ isSubmitted: true });
      })
      .catch(error => {
        alert(
          `Something went wrong while submitting your message: ${error.message}`
        );
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <PageHeader title="Contact Us" />
        <section className="section" style={{ paddingTop: '0px' }}>
          <div className="container">
            <div
              className="content"
              style={{
                display: `${this.state.isSubmitted ? 'none' : 'block'}`,
              }}
            >
              <p>
                Questions? Comments? Want to get more involved? We'd love to
                hear from you. Reach out to us with the form below and we'll get
                back to you as soon as we can.
              </p>
              <form
                data-netlify="true"
                name="contactForm"
                onSubmit={this.handleSubmit}
              >
                <div className="field">
                  <label className="label">Your Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Your Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Your Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="e.g. Type your message here"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control">
                  <input
                    type="submit"
                    value="Send Message"
                    className="button is-primary"
                  />
                </div>
              </form>
            </div>
            <div
              className="content"
              style={{
                display: `${this.state.isSubmitted ? 'block' : 'none'}`,
              }}
            >
              <p>
                Thanks for reaching out {this.state.name.split(' ')[0]}! We'll
                get back to you soon at {this.state.email} about:
              </p>
              <blockquote>{this.state.message}</blockquote>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
