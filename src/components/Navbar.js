import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/fontawesome-free-brands';
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid';
import logo from '../img/hor_logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileIsOpen: false,
    };
  }

  addActiveClass(defaultClass) {
    if (this.state.mobileIsOpen) {
      return `${defaultClass} is-active`;
    }
    return defaultClass;
  }

  handleClick = event => {
    const currentState = this.state.mobileIsOpen;
    this.setState({ mobileIsOpen: !currentState });
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src={logo}
                alt="Go Vote Tusc"
                style={{ maxHeight: '2.25rem' }}
              />
            </Link>

            <div
              className={this.addActiveClass('navbar-burger')}
              onClick={this.handleClick}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={this.addActiveClass('navbar-menu')}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/ballot-measures">
                Ballot Measures
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/events">
                Events
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <a
                    target="_blank"
                    href="https://twitter.com/govotetusc"
                    className="button is-white"
                  >
                    <span className="icon is-medium">
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        transform="grow-8"
                      />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://facebook.com/govotetusc"
                    className="button is-white"
                  >
                    <span className="icon is-medium">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        transform="grow-8"
                      />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="http://eepurl.com/dqxj3j"
                    className="button is-white"
                  >
                    <span className="icon is-medium">
                      <FontAwesomeIcon
                        icon={faEnvelopeSquare}
                        transform="grow-8"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
