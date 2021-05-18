import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BlogOverviewTemplate } from 'templates';
import { BLOG_ENTRIES_PER_PAGE } from 'lib/constants';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges').map(
      (post) => post.node,
    );
    const postsCount = posts.length;
    const pageCount = Math.ceil(postsCount / BLOG_ENTRIES_PER_PAGE);

    return (
      <BlogOverviewTemplate
        {...{ posts, postsCount, pageCount }}
      ></BlogOverviewTemplate>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            description
            fluid(maxWidth: 1870, maxHeight: 1870, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;
