import React from "react";
import cx from "classnames";
import styles from "./Heading.module.scss";

const Heading = ({ n = 1, classes = "", children }) => {
  const HeadingTag = `h${n}`;
  return (
    <HeadingTag className={cx(classes, styles[HeadingTag])}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
