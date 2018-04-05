import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Contact Us</h1>
            <p>
              Questions? Comments? Want to get more involved? We'd love to hear
              from you. Reach out to us with the form below and we'll get back
              to you as soon as we can.
            </p>
            <form>
              <div className="field">
                <label className="label">Your Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    required
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Your Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="So we can respond to you"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Your Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="e.g. Type your message here"
                    required
                  />
                </div>
              </div>
              <div className="control">
                <input
                  type="submit"
                  value="Send Message"
                  className="button is-success"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
