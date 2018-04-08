import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import style from 'styled-components';
import PageHeader from '../components/PageHeader';

export const AboutPageTemplate = ({
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
