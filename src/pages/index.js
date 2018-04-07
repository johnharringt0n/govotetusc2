import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

import Mailchimp from '../components/Mailchimp';

const Title = styled.h1`
  color: white;
  background-color: #cd474b;
  padding: 4px 12px;
  margin: 0px 5px;
  border-radius: 3px;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.75rem;
  line-height: 1.5;
  max-width: 900px;
  margin: 20px 5px;
  font-weight: 300;
`;

export default class IndexPage extends React.Component {
  handleClick = event => {
    const scrollText = document.getElementById('scrollText');
    scrollText.scrollIntoView();
  };

  render() {
    return (
      <div>
        <div id="fullPageBackground">
          <Title>Get Out The Vote</Title>
          <Subtitle>
            GoVoteTusc is a Tuscarawas County bipartisan nonprofit organization
            dedicated to increasing voter turnout in the 2018 midterm elections.
          </Subtitle>
          <button
            className="button is-medium is-link is-inverted"
            onClick={this.handleClick}
          >
            Learn More
            <FontAwesomeIcon
              style={{ margin: '0px 0px 0px 5px' }}
              icon={faAngleDoubleDown}
            />
          </button>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 id="scrollText" className="has-text-weight-bold is-size-1">
                What is GoVoteTusc?
              </h1>
              <p>
                We're a collection of Tuscarawas citizens focused on increasing
                voter turnout in the 2018 midterm elections. Our primary goals
                are changing the gerrymandering regulations in the county to
                lead to a more balanced redistricting in the future.
              </p>

              <h1 className="has-text-weight-bold is-size-1">
                How can I get involved?
              </h1>
              <Mailchimp />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
