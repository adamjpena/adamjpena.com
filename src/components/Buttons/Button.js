import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";
import Link from "../helpers/Link";

const Button = ({
  asText = false,
  classes = "",
  inverted = false,
  primary = false,
  secondary = false,
  ...restProps
}) => {
  const className = cx(
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.asText]: asText,
      [styles.inverted]: inverted,
    },
    styles.button,
    classes
  );
  if (restProps.to || restProps.href) {
    return <Link {...{ className }} {...restProps} />;
  }
  return <button type="button" {...{ className }} {...restProps} />;
};

export default Button;
