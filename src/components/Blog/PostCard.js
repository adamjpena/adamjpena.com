import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import styles from './PostCard.module.scss';
import gridStyles from 'scss/grid.module.scss';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';
import { GatsbyImage, Heading } from 'components/Layout';

const PostCard = ({
  description,
  heroImage,
  isHighlight = false,
  isSecondaryPost = false,
  slug,
  title,
}) => {
  const cellWidths = {
    xs: 2,
    sm: isHighlight ? 1 : 2,
  };

  const isTertiaryPost = !isHighlight && !isSecondaryPost;
  console.log(heroImage.description);
  return (
    <div
      className={cx(styles.postCard, {
        [styles.postCardHighlight]: isHighlight,
      })}
    >
      <Grid margin={0} gap={GRID_CONSTANTS.gapMedium} columns={2}>
        <Cell
          className={cx({ [gridStyles.hiddenXs]: isTertiaryPost })}
          width={cellWidths}
        >
          <div className={styles.imgContainer}>
            <Link className={styles.imgLink} to={slug}>
              <GatsbyImage
                classes={styles.img}
                alt={heroImage.description}
                fluid={heroImage.fluid}
              />
            </Link>
          </div>
        </Cell>
        <Cell
          width={cellWidths}
          className={cx({ [styles.postCard__highlightBody]: isHighlight })}
        >
          <Link to={slug}>
            <Heading
              classes={styles.postCard__title}
              level={isHighlight ? 1 : 3}
            >
              {title}
            </Heading>
          </Link>
          <p className={styles.postCard__description}>
            {description.childMarkdownRemark.rawMarkdownBody}
          </p>
        </Cell>
      </Grid>
    </div>
  );
};

export default PostCard;
