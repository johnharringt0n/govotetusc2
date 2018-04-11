import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import PageHeader from '../../components/PageHeader';
import styled from 'styled-components';

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  grid-gap: 20px;
  padding: 10px 20px;
`;

const PostContainer = styled.div`
  border: 1px solid #cccccc;
  padding: 1rem;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

const Post = ({ post }) => {
  return (
    <div className="column is-half" style={{ display: 'flex' }} key={post.id}>
      <PostContainer>
        <div>
          <Link
            className="title is-spaced is-4 is-size-5-mobile"
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
          <p className="subtitle is-6 is-size-6-mobile">
            {post.frontmatter.date}
          </p>
        </div>
        <div style={{ padding: '10px 0px', alignSelf: 'center' }}>
          <p>{post.excerpt}</p>
        </div>
        <div>
          <Link
            className="button is-small is-primary is-outlined"
            to={post.fields.slug}
          >
            Keep Reading →
          </Link>
        </div>
      </PostContainer>
    </div>
  );
};

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <PageHeader
          title="GoVoteTusc Blog"
          subtitle="Learn about the issues on the ballot"
        />
        <section className="section" style={{ paddingTop: '0px' }}>
          <div className="container">
            <div className="columns is-multiline">
              {posts
                .filter(
                  post => post.node.frontmatter.templateKey === 'blog-post'
                )
                .map(({ node: post }) => <Post key={post.id} post={post} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
