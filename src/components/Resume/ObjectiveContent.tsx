import React, { FC } from 'react';
import cx from 'classnames';
import styles from 'scss/resume.module.scss';

const ObjectiveContent: FC = ({ title, content }) => (
  <>
    <div className={cx(styles.heading1)}>{title.toUpperCase()}</div>
    <div className={cx(styles.heading3)}>{content}</div>
  </>
);

export default ObjectiveContent;
