import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

import Mailchimp from '../components/Mailchimp';

const title = {
  backgroundColor: '#cd474b',
  padding: '4px 12px',
  margin: '0px 5px',
  borderRadius: '3px',
};

const Title = styled.h1`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #cd474b;
  padding: 4px 12px;
  margin: 0px 10px;
  border-radius: 3px;

  /* Mobile */
  font-size: 1.75rem;

  /* Tablet */
  @media (min-width: 769px) {
    font-size: 3rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  color: white;
  line-height: 1.5;
  max-width: 900px;
  margin: 20px 5px;
  font-weight: 300;

  /* Mobile */
  font-size: 1rem;

  /* Tablet */
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const HomeSection = styled.div.attrs({
  className: 'section',
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  p {
    max-width: 900px;
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
function SectionTitle({ title }) {
  return (
    <h2 className="is-size-2 is-size-3-tablet is-size-4-mobile has-text-primary has-text-weight-semibold">
      {title}
    </h2>
  );
}

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
        {/* What is GoVoteTusc? */}
        <HomeSection>
          <div id="scrollText" />
          <SectionTitle title="What is GoVoteTusc?" />
          <div className="home-divider-line" />
          <p>
            GoVoteTusc is a community organization focused on increasing voter
            turnout in the midterm elections.
          </p>
        </HomeSection>
        <HomeSection>
          <SectionTitle title="Why focus on voter turnout?" />
          <div className="home-divider-line" />
          <p>
            The state of Ohio has seen a{' '}
            <strong>24.47% decline in midterm voting since 2006</strong>. This
            means that more than 1,000,000 voters are no longer participating in
            midterm elections.
          </p>
          <br />
          <p>
            Tusc County matches the overall Ohio decline which means that there
            are <strong>7,437 people not voting</strong> any more in the county
            for midterms.
          </p>
        </HomeSection>
        <HomeSection>
          <SectionTitle title="How can I get involved?" />
          <div className="home-divider-line" />
          <p>
            Enter your email below to sign up for our newsletter to keep you up
            to date on our events, voting deadlines, and ways to get out the
            vote in your own community. For more specific questions, head to our{' '}
            <Link to="/contact">Contact Page</Link> and drop us a line.
          </p>
          <Mailchimp />
        </HomeSection>
      </div>
    );
  }
}
