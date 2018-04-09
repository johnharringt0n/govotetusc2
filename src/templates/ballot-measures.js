import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import style from 'styled-components';
import PageHeader from '../components/PageHeader';

export const BallotMeasuresTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <section className="section" style={{ paddingTop: '0px' }}>
        <div
          style={{ margin: '0px auto', maxWidth: 900 }}
          className="container"
        >
          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  );
};

BallotMeasuresTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const BallotMeasuresPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BallotMeasuresTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
    />
  );
};

BallotMeasuresPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BallotMeasuresPage;

export const ballotMeasuresPageQuery = graphql`
  query BallotMeasuresPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
