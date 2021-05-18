import React from 'react';
import Img from 'gatsby-image';
import cx from 'classnames';
import styles from './Image.module.scss';

const Image = ({ classes = '', alt = '', fluid }) => (
  <Img className={cx(classes, styles.img)} {...{ alt, fluid }} />
);

export default Image;
