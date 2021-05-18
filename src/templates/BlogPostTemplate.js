import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { DefaultTemplate } from './';
import { Heading, GatsbyImage } from 'components/Layout';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';
import { Body } from 'components/Blog';
import { Link } from 'gatsby';

import styles from './BlogPostTemplate.module.scss';

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPost');

  return (
    <DefaultTemplate pageTitle={post.title} metaDescription={post.description}>
      <div className={styles.blogPostTemplate}>
        <div className={styles.header}>
          <div className={styles.content}>
            <Grid
              columnGap={GRID_CONSTANTS.gapLarge}
              columns={2}
              reverseDirection={{ md: true }}
            >
              <Cell width={{ xs: 2, md: 1 }}>
                <Heading classes={styles.heading}>{post.title}</Heading>
                <p>{post.description.childMarkdownRemark.rawMarkdownBody}</p>
                <p>
                  By <Link to='/'>Adam J Peña</Link>
                </p>
              </Cell>
              <Cell width={{ xs: 2, md: 1 }} margin={{ xs: '-35px', md: 0 }}>
                <GatsbyImage
                  className={styles.img}
                  alt={post.heroImage.description}
                  fluid={post.heroImage.fluid}
                />
              </Cell>
            </Grid>
          </div>
        </div>
        <Body body={post.body.childMarkdownRemark.rawMarkdownBody} />
      </div>
    </DefaultTemplate>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        description
        fluid(maxWidth: 988, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`;
