import React from 'react';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';
import { PostCard } from './';

const Posts = ({ posts }) => {
  const firstPost = posts[0];
  const [, ...restPosts] = posts;
  return (
    <Grid columns={1} gap={GRID_CONSTANTS.gapMedium}>
      <Cell>
        <Grid columns={4} gap={GRID_CONSTANTS.gapMedium}>
          <Cell width={4}>
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
            return (
              <Cell
                key={`post-cell-${i}`}
                width={{ xs: 4, md: 1 }}
                {...(i === 0 ? { push: { md: 2 } } : {})}
              >
                <PostCard {...post} />
              </Cell>
            );
          })}
        </Grid>
      </Cell>
    </Grid>
  );
};

export default Posts;
