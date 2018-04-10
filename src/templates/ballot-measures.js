import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';

const Holder = styled.div.attrs({
  className: 'container',
})`
  margin: 0px auto;
  max-width: 900px;
`;

export const BallotMeasuresTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  tableOfContents,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <section className="section" style={{ paddingTop: '0px' }}>
        <Holder>
          <PageContent className="content" content={content} />
        </Holder>
      </section>
    </div>
  );
};

BallotMeasuresTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  tableOfContents: PropTypes.string,
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
      tableOfContents={data.markdownRemark.tableOfContents}
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
      tableOfContents
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
