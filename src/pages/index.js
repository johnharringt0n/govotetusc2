import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import capital from '../img/capital.jpg';

const fullImgContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url({ capital })',
};

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
            </div>
          </div>
        </section>
      </div>
    );
  }
}
