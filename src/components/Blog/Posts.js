import React from 'react';
import cx from 'classnames';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';
import { PostCard } from './';

import styles from './Posts.module.scss';

const Posts = ({ posts }) => {
  const [firstPost, ...restPosts] = posts;

  return (
    <Grid columns={1} gap={GRID_CONSTANTS.gapMedium}>
      <Cell>
        <Grid columns={4} gap={GRID_CONSTANTS.gapMedium}>
          <Cell
            className={cx(styles.postCardCell, styles.postCardCellHighlight)}
            width={4}
          >
            <PostCard {...firstPost} isHighlight />
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Grid
          margin={{ xs: 0, md: GRID_CONSTANTS.gapMedium }}
          columns={4}
          gap={GRID_CONSTANTS.gapMedium}
        >
          {restPosts.map((post, i) => {
            const isSecondaryPost = i === 0;

            return (
              <Cell
                className={styles.postCardCell}
                key={`post-cell-${i}`}
                width={{ xs: 4, sm: 2, md: 1 }}
                {...(isSecondaryPost ? { push: { md: 2 } } : {})}
              >
                <PostCard {...post} {...{ isSecondaryPost }} />
              </Cell>
            );
          })}
        </Grid>
      </Cell>
    </Grid>
  );
};

export default Posts;
