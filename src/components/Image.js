import React from "react";
import cx from "classnames";
import styles from "./Image.module.scss";

const Image = ({ classes, ...restRrops }) => (
  <img className={cx(classes, styles.img)} {...restRrops} />
);

export default Image;
