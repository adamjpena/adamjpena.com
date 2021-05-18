import React from 'react';
import { DefaultTemplate } from './';
import { Heading } from 'components/Layout';
import { Posts } from 'components/Blog';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';

import styles from './BlogOverviewTemplate.module.scss';

const BlogOverviewTemplate = ({ posts, postsCount, pageCount }) => {
  console.log(posts);
  return (
    <DefaultTemplate pageTitle='Blog' metaDescription='adamjpena.com blog'>
      <div className={styles.blogOverviewTemplate}>
        <Grid
          margin={{ xs: 0, md: GRID_CONSTANTS.gapMedium }}
          gap={GRID_CONSTANTS.gapMedium}
          columns={1}
        >
          <Cell width={1}>
            <Heading stronger classes={styles.heading}>
              Adam Peña&#39;s Blog
            </Heading>
          </Cell>
        </Grid>
        {posts.length > 0 && <Posts {...{ posts }} />}
      </div>
    </DefaultTemplate>
  );
};

export default BlogOverviewTemplate;
