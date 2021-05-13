import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  asAnchor = false,
  asText = false,
  classes = "",
  inverted = false,
  ...restProps
}) => {
  if (asAnchor) {
    return (
      <a
        className={cx(
          { [styles.asText]: asText, [styles.inverted]: inverted },
          styles.button,
          classes
        )}
        {...restProps}
      />
    );
  }
  return (
    <button
      type="button"
      className={cx(
        { [styles.asText]: asText, [styles.inverted]: inverted },
        styles.button,
        classes
      )}
      {...restProps}
    />
  );
};

export default Button;
