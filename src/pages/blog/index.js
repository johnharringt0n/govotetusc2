import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Post = ({ post }) => {
  console.log(post);
  return (
    <div
      className="content"
      style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
      key={post.id}
    >
      <p>
        <Link className="has-text-primary" to={post.fields.slug}>
          {post.frontmatter.title}
        </Link>
        <span> &bull; </span>
        <small>{post.frontmatter.date}</small>
      </p>
      <p>
        {post.excerpt}
        <br />
        <br />
        <Link className="button is-small" to={post.fields.slug}>
          Keep Reading →
        </Link>
      </p>
    </div>
  );
};

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>GoVoteTusc Blog</h1>
            <p>
              Welcome to the GoVoteTusc blog. Here we share posts related to
              Getting Out The Vote, explanations of different voting
              terminology, and ways you can get involved. Interested in writing
              your own blog post here? Head to our{' '}
              <Link to="/contact">Contact Page</Link> and let us know!
            </p>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => <Post key={post.id} post={post} />)}
        </div>
      </section>
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
          excerpt(pruneLength: 400)
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
