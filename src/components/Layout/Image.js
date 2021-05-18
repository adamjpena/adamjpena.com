import React from 'react';
import cx from 'classnames';
import styles from './Image.module.scss';

const placeholderImage = 'http://placekitten.com/900/900';

const Image = ({
  classes = '',
  placeholder = false,
  alt = '',
  ...restRrops
}) => (
  <img
    className={cx(classes, styles.img)}
    alt={placeholder ? 'placeholder' : alt}
    {...(placeholder ? { src: placeholderImage } : {})}
    {...restRrops}
  />
);

export default Image;
