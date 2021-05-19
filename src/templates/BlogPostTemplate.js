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

  const { title, description, publishDate, heroImage, body, slug } = post;

  return (
    <DefaultTemplate
      pageTitle={title}
      metaDescription={description.childMarkdownRemark.rawMarkdownBody}
    >
      <div className={styles.blogPostTemplate}>
        <div className={styles.header}>
          <div className={styles.content}>
            <Grid
              columnGap={GRID_CONSTANTS.gapLarge}
              columns={2}
              reverseDirection={{ md: true }}
            >
              <Cell width={{ xs: 2, md: 1 }}>
                <Heading classes={styles.heading}>{title}</Heading>
                <p>{description.childMarkdownRemark.rawMarkdownBody}</p>
                <p className={styles.author}>
                  By <Link to='/'>Adam J Peña</Link>
                  <br />
                  {publishDate}
                </p>
              </Cell>
              <Cell width={{ xs: 2, md: 1 }} margin={{ xs: '-35px', md: 0 }}>
                <GatsbyImage
                  className={styles.img}
                  alt={heroImage.description}
                  fluid={heroImage.fluid}
                />
              </Cell>
            </Grid>
          </div>
        </div>
        <Body
          body={body.childMarkdownRemark.rawMarkdownBody}
          {...{ slug, title }}
        />
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
      slug
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
