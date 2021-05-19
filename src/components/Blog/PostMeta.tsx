import React, { FC } from 'react';
import cx from 'classnames';
import { Link } from 'components/helpers';
import TwitterSvg from 'assets/images/social/twitter.inline.svg';
import FacebookSvg from 'assets/images/social/facebook.inline.svg';
import LinkedInSvg from 'assets/images/social/linkedin.inline.svg';

import gridStyles from 'scss/grid.module.scss';
import styles from './PostMeta.module.scss';

const getSocialLinks = ({ route, title }) => {
  const encodedTitle = encodeURI(title);
  const encodedUrl = encodeURI(`https://adamjpena.com${route}`);

  return {
    twitter: `https://twitter.com/intent/tweet?text=%E2%80%9C${encodedTitle}%E2%80%9D+via+%40adamjpena+${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
  };
};

const PostMeta: FC = ({ readingTime, slug, title }) => {
  const socialLinks = getSocialLinks({ route: `/blog/${slug}`, title });

  return (
    <div className={styles.postMeta}>
      <ul className={cx(styles.socialShare, gridStyles.hidePrint)}>
        <li className={styles.socialShareLi}>
          <Link
            href={socialLinks.twitter}
            className={styles.socialShareItemA}
            targetBlank
          >
            <TwitterSvg className={styles.socialSvg} />
          </Link>
        </li>
        <li className={styles.socialShareLi}>
          <Link
            href={socialLinks.facebook}
            className={styles.socialShareItemA}
            targetBlank
          >
            <FacebookSvg className={styles.socialSvg} />
          </Link>
        </li>
        <li className={styles.socialShareLi}>
          <Link
            href={socialLinks.linkedIn}
            className={styles.socialShareItemA}
            targetBlank
          >
            <LinkedInSvg className={styles.socialSvg} />
          </Link>
        </li>
      </ul>
      <span className={styles.readingTime}>
        <i className='fa fa-hourglass-start' /> {readingTime} min read
      </span>
    </div>
  );
};

export default PostMeta;
