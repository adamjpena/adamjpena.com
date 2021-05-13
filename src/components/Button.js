import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ inverted = false, classes = "", ...restProps }) => (
  <button
    type="button"
    className={cx({ [styles.inverted]: inverted }, styles.button, classes)}
    {...restProps}
  />
);

export default Button;
