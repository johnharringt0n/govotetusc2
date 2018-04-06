import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Mailchimp from '../components/Mailchimp';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                Go Vote Tusc Co
              </h1>
              <p>This is some more content!</p>
              <p>Down here would be our mailChimp signup link</p>
              <Mailchimp />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
